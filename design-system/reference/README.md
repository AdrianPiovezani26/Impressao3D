# Referências visuais

Páginas HTML do design system para consulta no navegador. **Não são componentes** e nada aqui é importado pelo sistema.

| Pasta | Conteúdo | Precisa de |
|---|---|---|
| `guidelines/` | 21 cartões de fundamentos: cores, tipografia, espaçamento, raios, elevação, movimento, breakpoints, marca | só `../styles.css` (abre direto, sem servidor, sem internet) |
| `thumbnail.html` | ladrilho da marca (AKP3D sobre o verde-limão) | só `../styles.css` |
| `components/` | um cartão de pré-visualização por grupo de componentes (8) | duplo clique funciona, com internet (CDN); usa `runtime/ds-bundle.js` |
| `ui-kit-admin/` | painel administrativo completo (`index.html`) e a versão em moldura de celular (`mobile.html`) | **servidor local ou publicado** e internet (CDN); usa `runtime/ds-bundle.js` e as telas em `../../ui_kits/admin/` |
| `runtime/ds-bundle.js` | bundle compilado dos componentes, usado só por estas páginas | , |
| `source/fundamentos-de-ui.jpeg` | imagem de referência a partir da qual o design foi derivado | , |

## Como abrir

Os fundamentos e o thumbnail abrem com duplo clique, sem internet. Os cartões de componentes também, mas carregam React, Babel e Lucide do CDN `unpkg.com`. Só o **UI kit** exige servidor: ele lê as telas `.jsx` por requisição, o que o navegador bloqueia em `file://` (limitação que já existia no dump). Sirva a raiz do repositório e abra pelo endereço local:

```bash
# na raiz do repositório
python3 -m http.server 8000
# depois abra http://localhost:8000/design-system/reference/ui-kit-admin/index.html
```

## Observação

Estas páginas usam o prefixo de caminho relativo (`../../styles.css`), então funcionam tanto no servidor local quanto publicadas em `/Impressao3D/design-system/reference/`.
