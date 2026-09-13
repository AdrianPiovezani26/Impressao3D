(function (raiz) {
  'use strict';
  /* =============================================================================
   * akp3d-slicer-import.js
   * -----------------------------------------------------------------------------
   * Le arquivos fatiados do Bambu Studio / Orca Slicer e devolve os dados prontos
   * para a tela de precificacao da AKP3D.
   *
   * Zero dependencias: usa DecompressionStream (nativo no navegador) para o ZIP
   * e DOMParser para o XML. Nao precisa de JSZip nem fflate.
   *
   * Formatos aceitos:
   *   .gcode.3mf  -> RECOMENDADO. Todas as placas num arquivo so.
   *   .gcode      -> uma placa por arquivo. Le so os primeiros 64 KB.
   *
   * NAO aceita: .3mf de projeto (nao guarda o resultado do fatiamento),
   *             .stl (nao tem cor, peso nem tempo).
   *
   * Uso basico:
   *   const r = await importarFatiamento(file);
   *   if (r.avisos.some(a => a.bloqueia)) { ...mostrar erro... }
   *   r.slots.forEach(s => criarLinhaDeFilamento(s));
   *
   * Validado contra 5 arquivos reais (Bambu Studio 02.08.02.61 e 02.08.03.66,
   * A1 e A1 mini, 1 a 6 slots, 1 a 10 placas).
   * ========================================================================== */

  /* ============================== 1. ZIP ==================================== */

  const SIG_CENTRAL = 0x02014b50;
  const SIG_EOCD    = 0x06054b50;

  async function lerBytes(file, ini, fim) {
    return new Uint8Array(await file.slice(ini, fim).arrayBuffer());
  }

  async function acharEOCD(file) {
    // O End Of Central Directory fica no fim do arquivo (max 22 + 65535 bytes).
    const tam = Math.min(file.size, 65557);
    const buf = await lerBytes(file, file.size - tam, file.size);
    const dv = new DataView(buf.buffer);
    for (let i = buf.length - 22; i >= 0; i--) {
      if (dv.getUint32(i, true) === SIG_EOCD) {
        return { offCD: dv.getUint32(i + 16, true), tamCD: dv.getUint32(i + 12, true) };
      }
    }
    throw new Error('Arquivo nao parece ser um ZIP/3MF valido.');
  }

  async function lerDiretorioZip(file) {
    const { offCD, tamCD } = await acharEOCD(file);
    const buf = await lerBytes(file, offCD, offCD + tamCD);
    const dv  = new DataView(buf.buffer);
    const dec = new TextDecoder('utf-8');
    const entradas = new Map();
    let p = 0;
    while (p + 46 <= buf.length && dv.getUint32(p, true) === SIG_CENTRAL) {
      const metodo   = dv.getUint16(p + 10, true);
      const compSize = dv.getUint32(p + 20, true);
      const nomeLen  = dv.getUint16(p + 28, true);
      const extraLen = dv.getUint16(p + 30, true);
      const comLen   = dv.getUint16(p + 32, true);
      const offLocal = dv.getUint32(p + 42, true);
      const nome     = dec.decode(buf.subarray(p + 46, p + 46 + nomeLen));
      entradas.set(nome, { metodo, compSize, offLocal });
      p += 46 + nomeLen + extraLen + comLen;
    }
    return entradas;
  }

  async function extrairTexto(file, entrada) {
    // O cabecalho local tem tamanhos proprios de nome/extra; precisa reler.
    const cab = await lerBytes(file, entrada.offLocal, entrada.offLocal + 30);
    const dvc = new DataView(cab.buffer);
    const ini = entrada.offLocal + 30 + dvc.getUint16(26, true) + dvc.getUint16(28, true);
    const dados = await lerBytes(file, ini, ini + entrada.compSize);

    if (entrada.metodo === 0) return new TextDecoder('utf-8').decode(dados);
    if (entrada.metodo !== 8) throw new Error('Compressao ZIP nao suportada: ' + entrada.metodo);
    if (typeof DecompressionStream === 'undefined') {
      throw new Error('Navegador sem DecompressionStream. Use um navegador atualizado.');
    }
    const stream = new Blob([dados]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
    return await new Response(stream).text();
  }

  /* ============================ 2. UTILITARIOS ============================== */

  /**
   * Converte numero de texto tolerando virgula decimal.
   * O Bambu mistura os dois formatos no MESMO XML:
   *   weight="49.40"            -> ponto
   *   first_layer_time="1267,28" -> virgula
   */
  function num(v, padrao = null) {
    if (v === null || v === undefined || v === '') return padrao;
    const n = parseFloat(String(v).trim().replace(',', '.'));
    return Number.isFinite(n) ? n : padrao;
  }

  function bool(v) { return String(v).toLowerCase() === 'true'; }

  /** Segundos -> "11h36m05s" */
  function formatarTempo(seg) {
    const h = Math.floor(seg / 3600);
    const m = Math.floor((seg % 3600) / 60);
    const s = Math.floor(seg % 60);
    return `${h}h${String(m).padStart(2, '0')}m${String(s).padStart(2, '0')}s`;
  }

  /** Segundos -> { horas, minutos } para os dois campos da tela. */
  function tempoEmCampos(seg) {
    const total = Math.round(seg / 60);
    return { horas: Math.floor(total / 60), minutos: total % 60 };
  }

  function normalizarHex(c) {
    if (!c) return null;
    let h = String(c).trim().toUpperCase();
    if (!h.startsWith('#')) h = '#' + h;
    if (h.length === 9) h = h.slice(0, 7);   // descarta canal alfa (#RRGGBBAA)
    return /^#[0-9A-F]{6}$/.test(h) ? h : null;
  }

  /** Extrai so o material base do rotulo do slicer ou do cadastro. */
  function tipoBase(t) {
    if (!t) return null;
    const m = String(t).toUpperCase().match(/\b(PLA|PETG|PET|ABS|ASA|TPU|PA|PC|PVA|HIPS|PPA|PP)\b/);
    return m ? m[1] : String(t).toUpperCase().split(/[\s\-_]+/)[0];
  }

  /* ========================= 3. CORES E SUGESTAO ============================ */

  function hexParaRgb(hex) {
    const h = normalizarHex(hex);
    if (!h) return null;
    return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  }

  /** sRGB -> CIE L*a*b* (D65). Necessario para comparar cor como olho humano ve. */
  function rgbParaLab([r, g, b]) {
    const f = v => { v /= 255; return v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92; };
    const [R, G, B] = [f(r), f(g), f(b)];
    let X = (R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047;
    let Y = (R * 0.2126 + G * 0.7152 + B * 0.0722) / 1.00000;
    let Z = (R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883;
    const k = t => t > 0.008856 ? Math.cbrt(t) : (7.787 * t) + 16 / 116;
    [X, Y, Z] = [k(X), k(Y), k(Z)];
    return [116 * Y - 16, 500 * (X - Y), 200 * (Y - Z)];
  }

  /** Distancia CIE76. Abaixo de ~10 = cores praticamente iguais. */
  function deltaE(hexA, hexB) {
    const a = hexParaRgb(hexA), b = hexParaRgb(hexB);
    if (!a || !b) return Infinity;
    const [l1, a1, b1] = rgbParaLab(a), [l2, a2, b2] = rgbParaLab(b);
    return Math.hypot(l1 - l2, a1 - a2, b1 - b2);
  }

  /** Plano B: o cadastro da AKP3D guarda NOME DA COR em texto, nao hex. */
  const CORES_PT = {
    BRANCO: '#FFFFFF', PRETO: '#000000', CINZA: '#808080', PRATA: '#C0C0C0',
    VERMELHO: '#D02727', BORDO: '#6B1B1B', ROSA: '#FF7BAC', LARANJA: '#FF7F00',
    AMARELO: '#FFFF00', DOURADO: '#D4AF37', OURO: '#D4AF37',
    VERDE: '#00AE42', AZUL: '#0066CC', 'AZUL ROYAL': '#1A3FCC', 'AZUL CLARO': '#7EC8E3',
    ROXO: '#7B2FBE', LILAS: '#C8A2C8', MARROM: '#6F5034', BEGE: '#D3B7A7',
    NATURAL: '#EDE6D6', TRANSPARENTE: '#EDE6D6', PELE: '#DEB787',
  };

  function hexDoNome(nome) {
    if (!nome) return null;
    const n = String(nome).toUpperCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
    if (CORES_PT[n]) return CORES_PT[n];
    for (const [chave, hex] of Object.entries(CORES_PT)) {
      if (n.includes(chave)) return hex;
    }
    return null;
  }

  /**
   * Sugere qual filamento do cadastro corresponde a um slot do fatiador.
   *
   * Ordem: 1) mapa aprendido  2) hex do cadastro (se existir)  3) nome da cor.
   * O mapa aprendido nao depende de o cadastro ter hex — por isso a importacao
   * funciona hoje, sem migrar o cadastro.
   *
   * @param slot        item de resultado.slots
   * @param filamentos  [{ id, nomeCor, hex?, tipo, marca }]
   * @param mapa        { "#FFFFFF|PLA": idDoFilamento, ... }  (persistir no banco)
   */
  function sugerirFilamento(slot, filamentos, mapa = {}) {
    const chave = `${slot.hex}|${slot.tipo}`;
    if (mapa[chave]) {
      const f = filamentos.find(x => String(x.id) === String(mapa[chave]));
      if (f) return { filamento: f, origem: 'aprendido', confianca: 1 };
    }

    const compativeis = filamentos.filter(f => !slot.tipo || tipoBase(f.tipo) === slot.tipo);
    const pool = compativeis.length ? compativeis : filamentos;

    let melhor = null, menor = Infinity, origem = null;
    for (const f of pool) {
      const alvo = normalizarHex(f.hex) || hexDoNome(f.nomeCor);
      if (!alvo) continue;
      const d = deltaE(slot.hex, alvo);
      if (d < menor) { menor = d; melhor = f; origem = f.hex ? 'hex' : 'nome'; }
    }
    if (!melhor) return { filamento: null, origem: 'nenhum', confianca: 0 };

    return {
      filamento: melhor,
      origem,
      // deltaE 0 = identico; acima de ~40 e chute. Vira barra de confianca na tela.
      confianca: Math.max(0, 1 - menor / 40),
      deltaE: Number(menor.toFixed(1)),
    };
  }

  /* ====================== 4. LEITURA DO slice_info.config =================== */

  function lerSliceInfo(xml) {
    const doc = new DOMParser().parseFromString(xml, 'application/xml');
    if (doc.querySelector('parsererror')) throw new Error('slice_info.config ilegivel.');

    const versao = doc.querySelector('header_item[key="X-BBL-Client-Version"]')
      ?.getAttribute('value') ?? null;

    const placas = [...doc.querySelectorAll('plate')].map(pl => {
      const meta = {};
      pl.querySelectorAll(':scope > metadata').forEach(m => {
        meta[m.getAttribute('key')] = m.getAttribute('value');
      });

      const filamentos = [...pl.querySelectorAll(':scope > filament')].map(f => ({
        id:              parseInt(f.getAttribute('id'), 10),
        hex:             normalizarHex(f.getAttribute('color')),
        tipo:            tipoBase(f.getAttribute('type')),
        gramas:          num(f.getAttribute('used_g'), 0),
        metros:          num(f.getAttribute('used_m'), 0),
        usadoEmObjeto:   bool(f.getAttribute('used_for_object')),
        usadoEmSuporte:  bool(f.getAttribute('used_for_support')),
        // Tempo de carga/descarga: e ~20-30% do tempo em placas multicor.
        trocaSeg:        num(f.getAttribute('total_load_time'), 0)
                       + num(f.getAttribute('total_unload_time'), 0),
      }));

      const objetos = [...pl.querySelectorAll(':scope > object')].map(o => ({
        // getAttribute ja decodifica entidades XML (&apos; em "sucre d'orgue.stl").
        nome:    o.getAttribute('name'),
        pulado:  bool(o.getAttribute('skipped')),
      }));

      return {
        indice:         parseInt(meta.index, 10),
        tempoSeg:       num(meta.prediction, 0),   // = "total estimated time" do gcode
        gramasDeclarado: num(meta.weight, 0),      // arredondado; NAO usar na conta
        pausas:         num(meta.pause_count, 0),
        foraDaMesa:     bool(meta.outside),
        impressoraId:   meta.printer_model_id ?? null,
        bico:           num(meta.nozzle_diameters, null),
        filamentos,
        objetos,
        gramas: filamentos.reduce((s, f) => s + f.gramas, 0),
        trocaSeg: filamentos.reduce((s, f) => s + f.trocaSeg, 0),
      };
    });

    return { versao, placas };
  }

  /** project_settings.config: densidade por slot e matriz de descarga (opcionais). */
  function lerProjectSettings(json) {
    let d;
    try { d = JSON.parse(json); } catch { return null; }
    const arr = v => Array.isArray(v) ? v : (v === undefined ? [] : [v]);
    return {
      // ATENCAO: densidade varia entre filamentos do MESMO tipo (1.22 a 1.32 em PLA).
      densidades: arr(d.filament_density).map(x => num(x, 1.24)),
      matrizDescarga: arr(d.flush_volumes_matrix).map(x => num(x, 0)),
      multiplicadorDescarga: num(arr(d.flush_multiplier)[0], 1),
      impressora: d.printer_model ?? d.printer_settings_id ?? null,
    };
  }

  /* ================ 5. LEITURA DE .gcode AVULSO (uma placa) ================= */

  function lerCabecalhoGcode(texto) {
    const pegar = re => (texto.match(re) || [])[1] ?? null;

    const tempoTxt = pegar(/total estimated time:\s*([^\n;]+)/);
    let tempoSeg = 0;
    if (tempoTxt) {
      const h = num((tempoTxt.match(/(\d+)h/) || [])[1], 0);
      const m = num((tempoTxt.match(/(\d+)m/) || [])[1], 0);
      const s = num((tempoTxt.match(/(\d+)s/) || [])[1], 0);
      tempoSeg = h * 3600 + m * 60 + s;
    }

    // Separadores diferentes no mesmo arquivo: peso usa virgula, cor usa ponto-e-virgula.
    const pesos  = (pegar(/total filament weight \[g\]\s*:\s*([\d.,\s]+)/) || '')
                     .split(',').map(x => num(x, 0)).filter(x => x > 0);
    const cores  = (pegar(/^;\s*filament_colour\s*=\s*(.+)$/m) || '').split(';').map(normalizarHex);
    const tipos  = (pegar(/^;\s*filament_type\s*=\s*(.+)$/m) || '').split(';').map(tipoBase);
    const dens   = (pegar(/^;\s*filament_density\s*=\s*(.+)$/m) || '').split(',').map(x => num(x, 1.24));

    // NUNCA calcular peso a partir de "total filament volume [cm^3]":
    // o Bambu emite mm3 com rotulo de cm3. Usar sempre o peso declarado.
    const filamentos = pesos.map((g, i) => ({
      id: i + 1, gramas: g, hex: cores[i] ?? null, tipo: tipos[i] ?? null,
      densidade: dens[i] ?? 1.24, usadoEmObjeto: true, usadoEmSuporte: false, trocaSeg: 0,
    }));

    return {
      versao: pegar(/^;\s*BambuStudio\s+([\d.]+)/m),
      impressora: pegar(/^;\s*printer_model\s*=\s*(.+)$/m),
      placa: { indice: 1, tempoSeg, filamentos, objetos: [], pausas: 0, foraDaMesa: false,
               gramas: filamentos.reduce((s, f) => s + f.gramas, 0), trocaSeg: 0,
               gramasDeclarado: 0 },
    };
  }

  /* ============================ 6. AGREGACAO ================================ */

  function agregar({ versao, placas, ajustes, impressora, arquivo }) {
    const avisos = [];

    if (!placas.length) {
      avisos.push({ bloqueia: true, codigo: 'SEM_FATIAMENTO', texto:
        'Este arquivo nao contem resultado de fatiamento. Exporte pelo Bambu Studio em ' +
        'Arquivo > Exportar > Exportar arquivo de placa fatiada (.gcode.3mf). ' +
        'O .3mf de projeto nao guarda peso nem tempo.' });
      return { origem: { arquivo, versao }, totais: null, slots: [], placas: [],
               objetos: [], avisos, purga: null };
    }

    const validas = [];
    for (const p of placas) {
      if (!p.filamentos.length) {
        avisos.push({ bloqueia: false, codigo: 'PLACA_VAZIA',
          texto: `Placa ${p.indice} esta vazia e foi ignorada.` });
        continue;
      }
      if (!p.tempoSeg) {
        avisos.push({ bloqueia: true, codigo: 'PLACA_SEM_TEMPO',
          texto: `Placa ${p.indice} nao tem tempo calculado. Refatie antes de exportar.` });
      }
      if (p.foraDaMesa) {
        avisos.push({ bloqueia: true, codigo: 'FORA_DA_MESA',
          texto: `Placa ${p.indice} tem objeto fora da area de impressao.` });
      }
      if (p.pausas > 0) {
        avisos.push({ bloqueia: false, codigo: 'PAUSAS',
          texto: `Placa ${p.indice} tem ${p.pausas} pausa(s) programada(s) — some na mao de obra.` });
      }
      p.objetos.filter(o => o.pulado).forEach(o => avisos.push({
        bloqueia: false, codigo: 'OBJETO_PULADO',
        texto: `"${o.nome}" esta desativado na placa ${p.indice} e nao sera impresso.` }));
      validas.push(p);
    }

    // Agrega por slot. Os ids NAO sao contiguos entre placas (uma placa pode ter
    // so o id 6), por isso a chave e o id, nunca a posicao no array.
    const porSlot = new Map();
    for (const p of validas) {
      for (const f of p.filamentos) {
        const k = f.id;
        if (!porSlot.has(k)) {
          porSlot.set(k, { id: f.id, hex: f.hex, tipo: f.tipo, gramas: 0,
                           usadoEmSuporte: false, densidade: null, placas: [] });
        }
        const s = porSlot.get(k);
        s.gramas += f.gramas;
        s.usadoEmSuporte = s.usadoEmSuporte || f.usadoEmSuporte;
        s.placas.push(p.indice);
        if (f.densidade) s.densidade = f.densidade;
      }
    }
    if (ajustes?.densidades?.length) {
      for (const s of porSlot.values()) {
        s.densidade = ajustes.densidades[s.id - 1] ?? s.densidade ?? 1.24;
      }
    }
    const slots = [...porSlot.values()]
      .sort((a, b) => a.id - b.id)
      .map(s => ({ ...s, gramas: Number(s.gramas.toFixed(2)) }));

    // Objetos agrupados por nome: vira a contagem de pecas para mao de obra.
    const contagem = new Map();
    validas.forEach(p => p.objetos.filter(o => !o.pulado).forEach(o =>
      contagem.set(o.nome, (contagem.get(o.nome) || 0) + 1)));
    const objetos = [...contagem].map(([nome, qtd]) => ({ nome, qtd }))
      .sort((a, b) => b.qtd - a.qtd || a.nome.localeCompare(b.nome));

    const tempoSeg = validas.reduce((s, p) => s + p.tempoSeg, 0);
    const gramas   = Number(slots.reduce((s, x) => s + x.gramas, 0).toFixed(2));
    const trocaSeg = validas.reduce((s, p) => s + p.trocaSeg, 0);

    if (trocaSeg / Math.max(tempoSeg, 1) > 0.15) {
      avisos.push({ bloqueia: false, codigo: 'TROCA_ALTA', texto:
        `${formatarTempo(trocaSeg)} (${Math.round(trocaSeg / tempoSeg * 100)}% do tempo) ` +
        `sao carga/descarga de filamento. Reagrupar cores por placa reduz isso.` });
    }

    return {
      origem: { arquivo, slicer: 'Bambu Studio', versao,
                impressora: impressora ?? ajustes?.impressora ?? null,
                impressoraId: validas[0]?.impressoraId ?? null },
      totais: {
        tempoSeg, tempoTexto: formatarTempo(tempoSeg), ...tempoEmCampos(tempoSeg),
        gramas, qtdPlacas: validas.length,
        qtdPecas: objetos.reduce((s, o) => s + o.qtd, 0),
        trocaSeg,
      },
      slots, placas: validas, objetos, avisos, purga: null,
    };
  }

  /* ======================= 7. ENTRADA PRINCIPAL ============================= */

  /**
   * @param {File} file  .gcode.3mf (recomendado) ou .gcode
   * @returns objeto agregado; cheque `avisos.some(a => a.bloqueia)` antes de usar.
   */
  async function importarFatiamento(file) {
    const nome = (file.name || '').toLowerCase();

    if (nome.endsWith('.stl') || nome.endsWith('.obj') || nome.endsWith('.step')) {
      return agregar({ placas: [], arquivo: file.name, versao: null, avisosExtra: [] });
    }

    // .gcode avulso: so os primeiros 64 KB. O bloco de config termina antes disso.
    if (nome.endsWith('.gcode')) {
      const txt = await file.slice(0, 65536).text();
      const h = lerCabecalhoGcode(txt);
      return agregar({ versao: h.versao, placas: [h.placa], arquivo: file.name,
                       impressora: h.impressora, ajustes: null });
    }

    const entradas = await lerDiretorioZip(file);
    const ent = entradas.get('Metadata/slice_info.config');
    if (!ent) {
      return agregar({ placas: [], arquivo: file.name, versao: null });
    }

    const { versao, placas } = lerSliceInfo(await extrairTexto(file, ent));

    let ajustes = null;
    const ps = entradas.get('Metadata/project_settings.config');
    if (ps) { try { ajustes = lerProjectSettings(await extrairTexto(file, ps)); } catch {} }

    const r = agregar({ versao, placas, ajustes, arquivo: file.name });
    r._file = file;                 // guardado para a analise opcional de purga
    r._entradas = entradas;
    r._ajustes = ajustes;
    return r;
  }

  /**
   * Varias placas exportadas como .gcode avulso, ou varios .gcode.3mf.
   * Junta tudo num resultado so.
   */
  async function importarVarios(files) {
    const partes = await Promise.all([...files].map(importarFatiamento));
    const placas = [];
    let i = 1;
    partes.forEach(p => p.placas.forEach(pl => placas.push({ ...pl, indice: i++ })));
    const r = agregar({
      versao: partes[0]?.origem.versao,
      impressora: partes[0]?.origem.impressora,
      ajustes: partes.find(p => p._ajustes)?._ajustes ?? null,
      placas,
      arquivo: [...files].map(f => f.name).join(', '),
    });
    r.avisos.push(...partes.flatMap(p => p.avisos.filter(a => a.codigo === 'SEM_FATIAMENTO')));
    return r;
  }

  /* ===================== 8. ANALISE DE PURGA (opcional) ===================== */

  /**
   * Calcula quanto material foi para a torre de purga, por cor.
   * Le os gcodes inteiros — rode so quando o usuario pedir, nunca no fluxo padrao.
   *
   * Nao existe linha pronta no Bambu: o valor e derivado das trocas de ferramenta
   * cruzadas com flush_volumes_matrix.
   */
  async function analisarPurga(resultado) {
    const { _file: file, _entradas: entradas, _ajustes: aj } = resultado;
    if (!file || !entradas || !aj?.matrizDescarga?.length) {
      throw new Error('Analise de purga indisponivel para este arquivo.');
    }

    const n = Math.round(Math.sqrt(aj.matrizDescarga.length));   // 4x4, 5x5, 6x6...
    const M = Array.from({ length: n }, (_, i) => aj.matrizDescarga.slice(i * n, (i + 1) * n));
    const mult = aj.multiplicadorDescarga || 1;
    const dens = aj.densidades;

    const porSlot = new Map();
    let mm3Total = 0, trocas = 0;

    for (const p of resultado.placas) {
      const ent = entradas.get(`Metadata/plate_${p.indice}.gcode`);
      if (!ent) continue;
      const g = await extrairTexto(file, ent);

      // T1000 e T255 sao sentinelas do Bambu (torre / park), nao trocas de cor.
      // As linhas T podem vir com espaco a esquerda.
      const seq = [...g.matchAll(/^[ \t]*T(\d+)\b/gm)]
        .map(m => parseInt(m[1], 10)).filter(t => t < n);

      for (let i = 1; i < seq.length; i++) {
        const de = seq[i - 1], para = seq[i];
        if (de === para) continue;
        const mm3 = (M[de]?.[para] ?? 0) * mult;
        mm3Total += mm3; trocas++;
        // A purga e material NOVO empurrando o antigo: atribui ao destino,
        // com a densidade DELE (varia por slot, mesmo tudo sendo PLA).
        const g_ = mm3 / 1000 * (dens[para] ?? 1.24);
        porSlot.set(para + 1, (porSlot.get(para + 1) || 0) + g_);
      }
    }

    const gramas = [...porSlot.values()].reduce((s, x) => s + x, 0);
    resultado.purga = {
      trocas,
      mm3: Math.round(mm3Total),
      gramas: Number(gramas.toFixed(2)),
      percentual: Number((gramas / Math.max(resultado.totais.gramas, 0.01) * 100).toFixed(1)),
      porSlot: [...porSlot].map(([id, g]) => ({ id, gramas: Number(g.toFixed(2)) }))
                           .sort((a, b) => a.id - b.id),
      // flush_into_support=1 devolve parte da purga para dentro do suporte,
      // entao este numero e o TETO do desperdicio, nao o valor exato.
      observacao: 'Teto estimado. Parte pode ser reaproveitada em suporte.',
    };
    return resultado.purga;
  }



  var API = {
    importarFatiamento: importarFatiamento,
    importarVarios: importarVarios,
    analisarPurga: analisarPurga,
    sugerirFilamento: sugerirFilamento,
    formatarTempo: formatarTempo,
    tempoEmCampos: tempoEmCampos,
    deltaE: deltaE,
    hexDoNome: hexDoNome,
    tipoBase: tipoBase,
  };
  raiz.AKP3D = Object.assign(raiz.AKP3D || {}, API);
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
})(typeof globalThis !== 'undefined' ? globalThis : this);
