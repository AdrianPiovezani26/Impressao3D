# Impressao3D

Sistema de gestão da AKP3D (impressão 3D) em uma única página web: precificação, estoque, pedidos, vendas, compras, contas, financeiro e relatórios. Os dados ficam no navegador (localStorage) e são sincronizados com o Firebase Firestore.

Publicado com GitHub Pages em https://adrianpiovezani26.github.io/Impressao3D/

## Estrutura do repositório

| Caminho | Função |
|---|---|
| `index.html` | O sistema inteiro (HTML, CSS e JavaScript em um arquivo). É o que o GitHub Pages publica. |
| `akp3d-slicer-import.js` | Lê arquivos fatiados do Bambu Studio e do Orca Slicer e devolve tempo e filamentos para a precificação. Sem dependências. |
| `akp3d-import-ui.js` | Botão "Importar fatiamento" e tela de conferência. Precisa do arquivo anterior carregado antes. |
| `restaurar_akp3d.js` | Script de restauração de dados, para colar no console do navegador. |
| `manifest.json` | Manifesto PWA (instalar como aplicativo). |
| `Logo_AKP3D.jpg` | Logotipo. |
| `design-system/` | Design system: tokens e fontes carregados pelo `index.html`, mais componentes e referências. Veja abaixo. |
| `eslint.config.mjs` | Lint de aderência ao design system. |

## Branches

- `main`: publicada pelo GitHub Pages.
- `layout-original-2026-10-06`: cópia congelada do sistema antes do menu lateral e do tema verde do logotipo.
- `layout-jarvis-verde-2026-10-06`: cópia congelada do sistema com menu lateral e paleta verde do logotipo, imediatamente antes da aplicação do design system.
- `layout-design-system-verde-2026-10-07`: cópia congelada do sistema com o design system na cor do logotipo e o texto em caixa mista, antes de padronizar as maiúsculas.
- `layout-design-system-lima-2026-10-06`: cópia congelada do sistema com o design system aplicado na cor verde-limão original (`#B8FE57`), antes da troca para o verde do logotipo.

## Rodando localmente

O `index.html` carrega seus módulos por caminhos que começam em `/Impressao3D/`. Para funcionar localmente, sirva a pasta que **contém** a pasta `Impressao3D`:

```bash
# a partir da pasta pai de Impressao3D
python3 -m http.server 8000
# abra http://localhost:8000/Impressao3D/
```

Firebase, jsPDF e os ícones (Tabler) vêm de CDNs e precisam de internet. A fonte Geist é local, em `design-system/assets/fonts/`.

## Imagem do produto

Cada produto pode ter uma imagem, que aparece como miniatura na lista de Produtos. Ela é definida de três formas: no campo **Imagem do produto** da edição (escolher arquivo ou colar com Ctrl+V), ao **importar um `.gcode.3mf`** na Precificação, ou ao salvar o produto vindo dessa importação.

**Importação.** O `.gcode.3mf` do Bambu Studio e do Orca traz um render de cada placa (`Metadata/plate_N.png`). A janela de conferência mostra as placas para você escolher uma, e sugere o nome do produto: o nome do objeto, quando legível, ou o nome do arquivo (nomes gerados por máquina, como UUIDs, são descartados). O nome só preenche campos vazios, e a imagem só é oferecida na Precificação; nas Impressões Internas entra apenas o nome.

**Como é guardada.** A imagem é recortada no objeto e reduzida a 192×192 px em WebP, com teto de 30 KB. Ela **não** fica dentro do cadastro de produtos: cada uma vai para um documento próprio do Firestore (`akp3d/img_<id do produto>`), sem ouvinte em tempo real, e o produto guarda só um número (`imgV`). Isso evita o limite de 1 MiB por documento do Firestore, que o sistema já usa para chaves inteiras, e evita que cada aparelho baixe todas as imagens a cada alteração. Cada aparelho mantém uma cópia local (IndexedDB) e só busca na nuvem o que não tem ou o que mudou. Sem rede, a imagem fica salva no aparelho e é enviada quando a conexão volta.

**Backup.** O backup JSON inclui as imagens na chave `akp3d_imagens`. Excluir o produto apaga a imagem.

**Desligar.** Apague o bloco `<script id="akp-imagens">` do `index.html`; os produtos continuam funcionando.

## Design system

A pasta [`design-system/`](design-system/README.md) reúne tokens, componentes React, telas de um painel administrativo e páginas HTML de referência (Geist, verde-limão sobre grafite).

**Aplicação ao sistema.** O `index.html` usa o design system como **camada visual**, sem reescrita: quatro `<link>` carregam `design-system/tokens/` e o bloco `<style id="ds-theme">` (no fim do `<head>`) liga as variáveis do sistema aos tokens e reestiliza os componentes existentes. Nenhuma função, cálculo ou fluxo foi alterado, e os componentes React da pasta **não são usados** pelo sistema.

**Desvios conscientes**
- **Cor de destaque:** verde do logotipo (`#57d858`, medido em `Logo_AKP3D.jpg`) no lugar do verde-limão (`#B8FE57`) do design system. O ajuste está no início do bloco `ds-theme`; os arquivos de `design-system/tokens/` não foram alterados. Os verdes fixos no JavaScript usam o mesmo tom.
- **Caixa alta:** todo o texto do sistema aparece em maiúsculas, em vez da caixa mista do design system (regra no fim do bloco `ds-theme`). O que se digita em campos de texto é convertido e **gravado** em maiúsculas (`<script id="akp-maiusculas">`), exceto campos com a classe `no-upper` (e-mail, Pix, site), senhas, e-mail e URL. Dados já gravados não são alterados; só aparecem em maiúsculas na tela. Janelas nativas do navegador (`alert`, `confirm`) e os PDFs gerados não são afetados pelo CSS.
- No celular, o título da tela é menor e o aviso de estoque crítico do cabeçalho mostra só o ícone, para o nome da tela caber inteiro.
- Ícones continuam Tabler (o design system especifica Lucide).
- `--text3` (texto secundário pequeno) usa `#9aa1ab`, a única cor fora dos tokens: os tons do design system davam menos de 4,5:1 sobre caixas internas.
- Só tema escuro; o tema claro do design system não foi ligado.

**Reverter.** Remova os 4 `<link>` de `design-system/tokens/` e o bloco `<style id="ds-theme">` do `index.html` (as cores trocadas no JavaScript são visualmente próximas e podem ficar), ou restaure o arquivo da branch `layout-jarvis-verde-2026-10-06`:

```bash
git checkout layout-jarvis-verde-2026-10-06 -- index.html
```

Para desligar só as maiúsculas, apague o bloco `<script id="akp-maiusculas">` e a regra `TUDO EM MAIÚSCULAS` no fim do `ds-theme`, ou restaure da branch `layout-design-system-verde-2026-10-07`.

Para voltar ao design system na cor verde-limão original: `git checkout layout-design-system-lima-2026-10-06 -- index.html`.

Para ver o design system sozinho, abra as páginas de [`design-system/reference/`](design-system/reference/README.md).

## Lint

Hoje o lint cobre apenas a aderência ao design system e só se aplica a código novo que o use; o código legado do sistema fica fora. Na raiz:

```bash
npx eslint . --no-error-on-unmatched-pattern
```

A flag é necessária porque, enquanto não houver código novo que use o design system, todos os arquivos do projeto estão ignorados e o ESLint 9 trataria isso como erro.

Detalhes e limitações em [`design-system/README.md`](design-system/README.md#incorporação-ao-projeto-akp3d).
