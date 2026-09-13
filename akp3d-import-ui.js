/* =============================================================================
 * akp3d-import-ui.js
 * -----------------------------------------------------------------------------
 * Botao "Importar fatiamento" + tela de conferencia para a AKP3D.
 * Depende de akp3d-slicer-import.js carregado ANTES deste arquivo.
 *
 *   <script src="akp3d-slicer-import.js"></script>
 *   <script src="akp3d-import-ui.js"></script>
 *
 * Montagem:
 *   AKP3D.montarImportacao({
 *     container: '#area-do-botao',
 *     filamentos: () => listaDoCadastro,     // funcao: sempre pega a lista atual
 *     onAplicar: (dados) => { ... },         // voce preenche a tela aqui
 *     carregarMapa: async () => ({}),        // opcional (default: localStorage)
 *     salvarMapa:   async (mapa) => {},      // opcional (default: localStorage)
 *   });
 *
 * Formato esperado de cada filamento do cadastro:
 *   { id, nomeCor, marca, tipo, hex?, precoRolo?, pesoRolo? }
 *
 * O que chega em onAplicar:
 *   { linhas: [{ slot, filamentoId, gramas, hex, tipo, usadoEmSuporte }],
 *     tempoHoras, tempoMinutos, totais, objetos, avisos, purga }
 * ========================================================================== */

(function (raiz) {
  'use strict';

  var CSS = `
  .akp-imp-btn{display:inline-flex;align-items:center;gap:8px;background:#0b1a0f;color:#3ef07a;
    border:1px solid #1f6b3a;border-radius:6px;padding:10px 16px;font:600 13px/1 system-ui,sans-serif;
    cursor:pointer;letter-spacing:.4px}
  .akp-imp-btn:hover{background:#12291a;border-color:#3ef07a}
  .akp-imp-btn[disabled]{opacity:.5;cursor:progress}
  .akp-ov{position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:9999;display:flex;
    align-items:flex-start;justify-content:center;padding:24px;overflow:auto}
  .akp-md{background:#08120c;border:1px solid #1f6b3a;border-radius:10px;width:min(880px,100%);
    color:#cfe9d8;font:14px/1.5 system-ui,sans-serif}
  .akp-hd{padding:16px 20px;border-bottom:1px solid #143;display:flex;justify-content:space-between;
    align-items:center}
  .akp-hd h3{margin:0;color:#3ef07a;font-size:15px;letter-spacing:.5px}
  .akp-x{background:none;border:0;color:#7fb094;font-size:22px;cursor:pointer;line-height:1}
  .akp-bd{padding:16px 20px}
  .akp-ft{padding:14px 20px;border-top:1px solid #143;display:flex;gap:10px;justify-content:flex-end}
  .akp-resumo{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;
    margin-bottom:16px}
  .akp-card{background:#0d1f14;border:1px solid #17472a;border-radius:6px;padding:10px 12px}
  .akp-card b{display:block;color:#3ef07a;font-size:18px;font-weight:700}
  .akp-card span{font-size:11px;color:#7fb094;text-transform:uppercase;letter-spacing:.5px}
  .akp-av{border-radius:6px;padding:10px 12px;margin-bottom:8px;font-size:13px}
  .akp-av.bloq{background:#2a0d0d;border:1px solid #7a2020;color:#ffb4b4}
  .akp-av.warn{background:#241d06;border:1px solid #6b5312;color:#f0d98a}
  .akp-tb{width:100%;border-collapse:collapse;margin-top:8px}
  .akp-tb th{text-align:left;font-size:11px;color:#7fb094;text-transform:uppercase;
    letter-spacing:.5px;padding:6px 8px;border-bottom:1px solid #17472a;font-weight:600}
  .akp-tb td{padding:8px;border-bottom:1px solid #102b1a;vertical-align:middle}
  .akp-sw{width:26px;height:26px;border-radius:4px;border:1px solid #2b6b46;display:inline-block}
  .akp-tb select{width:100%;background:#0d1f14;color:#cfe9d8;border:1px solid #1f6b3a;
    border-radius:4px;padding:6px 8px;font-size:13px}
  .akp-tb select.baixa{border-color:#8a6a12;background:#1d1806}
  .akp-tb select.vazio{border-color:#7a2020;background:#210b0b}
  .akp-g{font-variant-numeric:tabular-nums;font-weight:600;color:#eaf6ee}
  .akp-tag{font-size:10px;background:#12331f;border:1px solid #1f6b3a;color:#7fd8a2;
    border-radius:3px;padding:1px 5px;margin-left:6px;text-transform:uppercase;letter-spacing:.4px}
  .akp-ac{background:none;border:0;color:#7fb094;font-size:12px;cursor:pointer;padding:8px 0;
    text-decoration:underline}
  .akp-pecas{font-size:12px;color:#9dc4ad;columns:2;margin:6px 0 0}
  .akp-b{border:1px solid #1f6b3a;background:#0b1a0f;color:#3ef07a;border-radius:6px;
    padding:9px 18px;font:600 13px system-ui,sans-serif;cursor:pointer}
  .akp-b.sec{color:#8fb3a0;border-color:#245}
  .akp-b[disabled]{opacity:.4;cursor:not-allowed}
  .akp-nota{font-size:12px;color:#8fb3a0;margin-top:10px;line-height:1.5}`;

  function css() {
    if (document.getElementById('akp-imp-css')) return;
    var s = document.createElement('style');
    s.id = 'akp-imp-css'; s.textContent = CSS;
    document.head.appendChild(s);
  }

  function el(tag, attrs, filhos) {
    var n = document.createElement(tag);
    for (var k in (attrs || {})) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k.startsWith('on')) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    }
    (filhos || []).forEach(function (f) {
      n.appendChild(typeof f === 'string' ? document.createTextNode(f) : f);
    });
    return n;
  }

  var CHAVE_LS = 'akp3d_mapa_cores_v1';
  var mapaLocal = {
    carregar: function () {
      try { return JSON.parse(localStorage.getItem(CHAVE_LS) || '{}'); } catch (e) { return {}; }
    },
    salvar: function (m) {
      try { localStorage.setItem(CHAVE_LS, JSON.stringify(m)); } catch (e) {}
    },
  };

  function rotuloFilamento(f) {
    return [f.nomeCor, f.marca, f.tipo].filter(Boolean).join(' ');
  }

  /* ------------------------------ modal --------------------------------- */

  function abrirConferencia(r, cfg, mapa) {
    css();
    var escolhas = {};   // slotId -> filamentoId
    var lista = cfg.filamentos() || [];

    var bloqueia = r.avisos.some(function (a) { return a.bloqueia; });

    var corpo = el('div', { class: 'akp-bd' });

    if (r.totais) {
      corpo.appendChild(el('div', { class: 'akp-resumo' }, [
        el('div', { class: 'akp-card', html:
          '<b>' + r.totais.tempoTexto + '</b><span>Tempo total</span>' }),
        el('div', { class: 'akp-card', html:
          '<b>' + r.totais.gramas.toFixed(2) + ' g</b><span>Material</span>' }),
        el('div', { class: 'akp-card', html:
          '<b>' + r.totais.qtdPlacas + '</b><span>Placas</span>' }),
        el('div', { class: 'akp-card', html:
          '<b>' + r.totais.qtdPecas + '</b><span>Peças</span>' }),
      ]));
    }

    r.avisos.forEach(function (a) {
      corpo.appendChild(el('div', { class: 'akp-av ' + (a.bloqueia ? 'bloq' : 'warn') }, [a.texto]));
    });

    if (r.slots.length) {
      var tb = el('table', { class: 'akp-tb' });
      tb.appendChild(el('thead', {}, [el('tr', {}, [
        el('th', {}, ['Cor']), el('th', {}, ['Slot']), el('th', {}, ['Tipo']),
        el('th', {}, ['Filamento do cadastro']), el('th', {}, ['Gramas']),
      ])]));
      var tbody = el('tbody');

      r.slots.forEach(function (slot) {
        var sug = raiz.AKP3D.sugerirFilamento(slot, lista, mapa);
        if (sug.filamento) escolhas[slot.id] = sug.filamento.id;

        var compat = lista.filter(function (f) {
          return !slot.tipo || raiz.AKP3D.tipoBase(f.tipo) === slot.tipo;
        });
        var pool = compat.length ? compat : lista;

        var sel = el('select', {
          onchange: function () {
            escolhas[slot.id] = this.value || null;
            this.className = this.value ? '' : 'vazio';
          },
        });
        sel.appendChild(el('option', { value: '' }, ['— selecione —']));
        pool.forEach(function (f) {
          var o = el('option', { value: f.id }, [rotuloFilamento(f)]);
          if (sug.filamento && String(f.id) === String(sug.filamento.id)) o.selected = true;
          sel.appendChild(o);
        });
        sel.className = !sug.filamento ? 'vazio' : (sug.confianca < 0.6 ? 'baixa' : '');

        var origem = { aprendido: 'aprendido', hex: 'por cor', nome: 'pelo nome', nenhum: '?' }[sug.origem];
        var etiquetas = origem ? '<span class="akp-tag">' + origem + '</span>' : '';
        if (slot.usadoEmSuporte) etiquetas += '<span class="akp-tag">suporte</span>';

        tbody.appendChild(el('tr', {}, [
          el('td', {}, [el('span', { class: 'akp-sw', style: 'background:' + (slot.hex || '#333') })]),
          el('td', { html: '<code>' + (slot.hex || '—') + '</code>' }),
          el('td', {}, [slot.tipo || '—']),
          el('td', { html: '' }),
          el('td', { class: 'akp-g' , html: slot.gramas.toFixed(2) + ' g' + etiquetas }),
        ]));
        tbody.lastChild.children[3].appendChild(sel);
      });

      tb.appendChild(tbody);
      corpo.appendChild(tb);
    }

    if (r.objetos && r.objetos.length) {
      var caixa = el('div');
      var link = el('button', { class: 'akp-ac' }, ['Ver as ' + r.totais.qtdPecas + ' peças ▾']);
      var ul = el('div', { class: 'akp-pecas', style: 'display:none' , html:
        r.objetos.map(function (o) { return o.nome + (o.qtd > 1 ? ' ×' + o.qtd : ''); }).join('<br>') });
      link.addEventListener('click', function () {
        ul.style.display = ul.style.display === 'none' ? 'block' : 'none';
      });
      caixa.appendChild(link); caixa.appendChild(ul);
      corpo.appendChild(caixa);
    }

    var nota = el('div', { class: 'akp-nota', html:
      'As gramas já incluem <b>todas as cópias que estão nas placas</b>, mais purga, ' +
      'suporte e torre. Se for repetir o trabalho inteiro, use Quantidade de unidades — ' +
      'não multiplique as gramas na mão.' });
    corpo.appendChild(nota);

    /* rodape */
    var btPurga = el('button', { class: 'akp-b sec' }, ['Analisar desperdício']);
    btPurga.addEventListener('click', function () {
      btPurga.disabled = true; btPurga.textContent = 'Lendo gcodes…';
      raiz.AKP3D.analisarPurga(r).then(function (p) {
        btPurga.replaceWith(el('div', { class: 'akp-nota', style: 'margin:0;align-self:center', html:
          '<b style="color:#f0d98a">Purga: ' + p.gramas.toFixed(2) + ' g (' + p.percentual +
          '% do material)</b> em ' + p.trocas + ' trocas' }));
      }).catch(function (e) {
        btPurga.disabled = false; btPurga.textContent = 'Indisponível: ' + e.message;
      });
    });

    var btOk = el('button', { class: 'akp-b' }, ['Aplicar no orçamento']);
    btOk.disabled = bloqueia;

    var ov = el('div', { class: 'akp-ov' });
    function fechar() { ov.remove(); }

    btOk.addEventListener('click', function () {
      var linhas = r.slots.map(function (s) {
        var fid = escolhas[s.id] || null;
        if (fid) mapa[s.hex + '|' + s.tipo] = fid;      // aprende para a próxima vez
        return { slot: s.id, filamentoId: fid, gramas: s.gramas, hex: s.hex,
                 tipo: s.tipo, usadoEmSuporte: s.usadoEmSuporte };
      });
      (cfg.salvarMapa || mapaLocal.salvar)(mapa);
      fechar();
      cfg.onAplicar({
        linhas: linhas,
        tempoHoras: r.totais.horas,
        tempoMinutos: r.totais.minutos,
        totais: r.totais, objetos: r.objetos, avisos: r.avisos, purga: r.purga,
        origem: r.origem,
      });
    });

    var modal = el('div', { class: 'akp-md' }, [
      el('div', { class: 'akp-hd' }, [
        el('h3', {}, ['Conferir importação']),
        el('button', { class: 'akp-x', onclick: fechar }, ['×']),
      ]),
      corpo,
      el('div', { class: 'akp-ft' }, [
        r.slots.length > 1 ? btPurga : el('span'),
        el('button', { class: 'akp-b sec', onclick: fechar }, ['Cancelar']),
        btOk,
      ]),
    ]);
    modal.querySelector('.akp-ft').style.justifyContent = 'space-between';

    ov.appendChild(modal);
    ov.addEventListener('click', function (e) { if (e.target === ov) fechar(); });
    document.body.appendChild(ov);
  }

  /* ------------------------------ montagem ------------------------------ */

  function montarImportacao(cfg) {
    css();
    var alvo = typeof cfg.container === 'string'
      ? document.querySelector(cfg.container) : cfg.container;
    if (!alvo) throw new Error('Container da importação não encontrado: ' + cfg.container);

    var input = el('input', {
      type: 'file', accept: '.3mf,.gcode', multiple: 'multiple', style: 'display:none',
    });

    var btn = el('button', { type: 'button', class: 'akp-imp-btn' },
      ['⬆ ' + (cfg.rotulo || 'Importar fatiamento')]);

    btn.addEventListener('click', function () { input.value = ''; input.click(); });

    input.addEventListener('change', function () {
      if (!input.files.length) return;
      btn.disabled = true; btn.textContent = 'Lendo arquivo…';
      var carregar = cfg.carregarMapa || function () { return mapaLocal.carregar(); };

      Promise.resolve(carregar()).then(function (mapa) {
        var p = input.files.length > 1
          ? raiz.AKP3D.importarVarios(input.files)
          : raiz.AKP3D.importarFatiamento(input.files[0]);
        return p.then(function (r) { abrirConferencia(r, cfg, mapa || {}); });
      }).catch(function (e) {
        alert('Não consegui ler o arquivo.\n\n' + e.message);
      }).then(function () {
        btn.disabled = false; btn.textContent = '⬆ ' + (cfg.rotulo || 'Importar fatiamento');
      });
    });

    alvo.appendChild(btn); alvo.appendChild(input);
    return btn;
  }

  raiz.AKP3D = Object.assign(raiz.AKP3D || {}, { montarImportacao: montarImportacao });
})(typeof globalThis !== 'undefined' ? globalThis : this);
