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

## Rodando localmente

O `index.html` carrega seus módulos por caminhos que começam em `/Impressao3D/`. Para funcionar localmente, sirva a pasta que **contém** a pasta `Impressao3D`:

```bash
# a partir da pasta pai de Impressao3D
python3 -m http.server 8000
# abra http://localhost:8000/Impressao3D/
```

Firebase, jsPDF e os ícones (Tabler) vêm de CDNs e precisam de internet. A fonte Geist é local, em `design-system/assets/fonts/`.

## Design system

A pasta [`design-system/`](design-system/README.md) reúne tokens, componentes React, telas de um painel administrativo e páginas HTML de referência (Geist, verde-limão sobre grafite).

**Aplicação ao sistema.** O `index.html` usa o design system como **camada visual**, sem reescrita: quatro `<link>` carregam `design-system/tokens/` e o bloco `<style id="ds-theme">` (no fim do `<head>`) liga as variáveis do sistema aos tokens e reestiliza os componentes existentes. Nenhuma função, cálculo ou fluxo foi alterado, e os componentes React da pasta **não são usados** pelo sistema.

**Desvios conscientes**
- Ícones continuam Tabler (o design system especifica Lucide).
- `--text3` (texto secundário pequeno) usa `#9aa1ab`, a única cor fora dos tokens: os tons do design system davam menos de 4,5:1 sobre caixas internas.
- Só tema escuro; o tema claro do design system não foi ligado.
- Cores verdes antigas fixas no JavaScript (estilos inline) foram trocadas pelo equivalente em verde-limão, só nos valores de cor.

**Reverter.** Remova os 4 `<link>` de `design-system/tokens/` e o bloco `<style id="ds-theme">` do `index.html` (as cores trocadas no JavaScript são visualmente próximas e podem ficar), ou restaure o arquivo da branch `layout-jarvis-verde-2026-10-06`:

```bash
git checkout layout-jarvis-verde-2026-10-06 -- index.html
```

Para ver o design system sozinho, abra as páginas de [`design-system/reference/`](design-system/reference/README.md).

## Lint

Hoje o lint cobre apenas a aderência ao design system e só se aplica a código novo que o use; o código legado do sistema fica fora. Na raiz:

```bash
npx eslint . --no-error-on-unmatched-pattern
```

A flag é necessária porque, enquanto não houver código novo que use o design system, todos os arquivos do projeto estão ignorados e o ESLint 9 trataria isso como erro.

Detalhes e limitações em [`design-system/README.md`](design-system/README.md#incorporação-ao-projeto-akp3d).
