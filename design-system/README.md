# AKP3D Design System

> Incorporado ao repositório **Impressao3D** a partir de um dump do Claude Design. O texto abaixo é o do dump, com os caminhos atualizados para a estrutura nova; o que foi decidido na incorporação está na seção **Incorporação ao projeto AKP3D**, no final.

Design system for **AKP3D sistemas** admin products: a modern, clean, dark-first admin dashboard with full mobile support. Desktop keeps every power feature (dense tables, bulk actions, right rail, keyboard hints); mobile reaches the same features through a bottom nav, sheets and stacked layouts.

## Sources
- `reference/source/fundamentos-de-ui.jpeg` — one reference image of a dark admin dashboard (lime accent, graphite cards, left sidebar, right notification rail). The wordmark in that image ("DWISON") belongs to the reference, not to AKP3D, and was not used.
- Brief: "Admin dashboard moderno, clean, agradável visualmente e com melhores práticas de UI/UX com acesso também mobile completo, mas sem perder recursos importantes no desktop."
- No codebase, Figma file, logo, font files or icon set were provided. Every value here was derived from the reference image (colors sampled from pixels) and then systematized.

## Index
- `styles.css` — entry point; `@import`s only. Link this one file.
- `tokens/` — `fonts.css` (Geist + Geist Mono @font-face), `colors.css` (scales + semantic aliases, dark default, `[data-theme="light"]`), `typography.css`, `spacing.css` (spacing, radii, shadows, motion, layout, z-index), `base.css` (element defaults).
- `components/components.css` — class styles (`.akp-*`) for every component, shipped globally.
- `components/<group>/` — React components (`.jsx` + `.d.ts` + `.prompt.md`). The `@dsCard` preview of each group lives in `reference/components/`.
- `index.js` — single entry point re-exporting every component (generated during incorporation).
- `reference/guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `ui_kits/admin/` — screens and mock data of the responsive click-through admin dashboard (see its README); the runnable pages are in `reference/ui-kit-admin/`.
- `lint/adherence.oxlintrc.json` — design-system adherence lint config (see the section at the end).
- `assets/fonts/` — Geist / Geist Mono woff2 (latin + latin-ext, variable).
- `reference/` — visual reference pages (HTML), vendored runtime and source image; see `reference/README.md`. `reference/thumbnail.html` — homepage tile. `SKILL.md` — Agent Skill entry.

## Components
Namespace: `window.AKP3DDesignSystem_42d958`. Load React 18, then Lucide UMD (`https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js`), then `reference/runtime/ds-bundle.js` (compiled from the `.jsx` files; used only by the reference pages).

- **core** — Icon
- **actions** — Button, IconButton
- **forms** — Input, Select, Checkbox, Radio, Switch, SegmentedControl
- **display** — Card, StatCard, Badge, Tag, Avatar, AvatarGroup
- **data** — DataTable, DonutChart, ChartLegend, AreaChart, ProgressBar, ListItem
- **navigation** — NavItem, NavSection, Tabs, Breadcrumbs, BottomNav, Pagination
- **feedback** — Alert, Toast, ToastRegion, Tooltip
- **overlay** — Dialog, Sheet, Menu

No source defined a component inventory, so this is a standard admin set sized to what the reference shows (KPI tiles, donut + legend, area chart, sortable table, notification/activity/contact lists, lime nav pill, pill CTA) plus the mobile pieces the brief requires (BottomNav, Sheet, stacking DataTable).

**Intentional additions:** `Icon` (wraps Lucide so every glyph shares one stroke weight), `ChartLegend` and `AvatarGroup` (paired helpers exported next to DonutChart and Avatar), `ToastRegion` (positions toasts correctly above the BottomNav on mobile).

## UI kits
- `reference/ui-kit-admin/index.html` — Visão geral, Pedidos, Clientes, Configurações, Login. Responsive from 360px to wide desktop.
- `reference/ui-kit-admin/mobile.html` — the same app framed at 390×844.

---

## CONTENT FUNDAMENTALS

**Language.** Brazilian Portuguese (pt-BR) across the product UI. Code, tokens and component APIs are English.

**Voice.** Direct, calm, operational. The panel reports facts and offers the next action; it doesn't cheer or sell. Marketing tone is allowed only inside the single promo card.

**Address.** Second person, informal-polite *você*, mostly implied through imperatives: "Ative para proteger o acesso", "Renove para manter a emissão de notas". The product never says "eu"/"nós" except in support copy ("Fale com o suporte").

**Casing.** Sentence case everywhere: titles, buttons, tabs, menu items ("Novo pedido", "Visão de vendas", "Marcar como enviado"). UPPERCASE only for sidebar section overlines (PAINÉIS, AJUSTES) and list headings inside sheets (ITENS), always with +0.08em tracking.

**Buttons.** Verb first, 1–3 words: "Salvar alterações", "Exportar", "Assinar agora", "Excluir". Destructive confirmations repeat the object: "Excluir 2 pedidos?".

**Numbers & dates.** pt-BR formatting, always: `R$ 3.131.021`, `R$ 1.289,90`, `0,4%`, `14/02/2026`, `14 fev 2026`. Abbreviate large values with *mil* / *mi* ("R$ 25,6 mil", "Meta: R$ 1,1 mi"). Every delta is paired with its period: "↗ 32% vs trimestre anterior". Relative times: "Agora mesmo", "Há 59 minutos", "Hoje, 11:59".

**Microcopy examples.**
- Empty: "Nenhum registro encontrado"
- Toast: "Pedido #4821 salvo" / "O cliente foi notificado por e-mail."
- Alert: "Certificado expira em 5 dias" / "Renove para manter a emissão de notas."
- Dialog: "Excluir produto?" / "Esta ação não pode ser desfeita."
- Greeting (mobile only): "Olá, Guy — aqui está o resumo de hoje."

**Emoji.** Never. Status is shown with colored dots, badges and Lucide icons.

---

## VISUAL FOUNDATIONS

**Vibe.** Night-mode control room: near-black graphite, one electric lime accent, soft emerald for data. Quiet surfaces, loud numbers.

**Color.** Dark is the default theme (`:root`); light is opt-in via `[data-theme="light"]` on any ancestor. Brand lime `--lime-400 #B8FE57` is used as a *fill* (active nav pill, primary button, selected list row, chart series 1, KPI chips) with ink text `#0B0B0D` on top, never as body text on light backgrounds (light theme switches accent text to `--lime-700`). Emerald (`--emerald-400/700`) carries area charts, success and the promo gradient. Neutrals are a cool graphite "ink" scale. Semantic colors: success emerald, danger `#FF6B6B`, warning `#FFC23D`, info `#5AA9FF`, each with a 12–14% alpha `-soft` fill for badges and alerts.

**Surfaces & layering.** Depth comes from tone, not shadow: `--bg-app #0B0B0D` → `--surface-sidebar #121214` (sidebar, rail, sheets) → `--surface-card #1E2126` → `--surface-card-raised #293036` (featured tiles, secondary buttons). Inputs sit on `--surface-inset #17191C` with a hairline. Cards have no border in dark mode; light mode adds a 1px `--card-border`.

**Type.** Geist (UI) + Geist Mono (order IDs, SKUs, codes). Titles are *medium* (500), never bold; KPIs are semibold (600) with -0.02em tracking and tabular numerals. Body 14px, dense 13px, captions 12px, overline 11px caps. Inputs bump to 16px under 640px so iOS doesn't zoom.

**Spacing & layout.** 4px base with 2/6/10 half-steps. Card padding 20px (16 on mobile); grid gap 16px (12 on mobile); content gutter 24px (16 on mobile). Fixed chrome: sidebar 248px (72 collapsed), top bar 64px, right rail 300px at ≥1280, bottom nav 64px + safe-area on mobile. Content max-width 1440px.

**Corner radii.** Cards 14px, dialogs/sheets 20px, inputs and nav items 10px, kbd 4px. Buttons, icon buttons, tags, badges, segmented controls and selected list rows are full pills (999px). This pill/rounded-rect contrast is a core motif.

**Borders.** Hairlines only (1px), drawn as inset box-shadows on controls: `--border-subtle #25272B` (dividers, table rows), `--border-default #30343A` (inputs, secondary buttons), `--border-strong #454A52` (hover).

**Shadows.** Reserved for floating layers: menu `--shadow-md`, dialog/toast/sheet `--shadow-lg`. The only colored shadow is `--shadow-accent-glow`, a soft lime halo on primary-button hover. No inner shadows beyond hairlines.

**Gradients.** One: `--promo-gradient` (emerald radial fading to near-black) for the single promo/upsell card per screen and the login hero. Area charts use a vertical emerald→transparent fill. No other gradients, no purple/blue, no gradient text.

**Imagery.** None in the product chrome; avatars are photos or tinted initials. If photography is added later it should be cool-toned and sit inside rounded cards, never full-bleed behind data.

**Transparency & blur.** Translucent white overlays (4–8%) for hover/pressed states; dialog scrim is 64% black with a 4px backdrop blur. Glass/blur is not used on cards.

**Motion.** Short and ease-out (`cubic-bezier(.2,.8,.2,1)`): 120ms hover/press, 180ms toggles/tabs, 280ms sheets/dialogs/charts. Dialogs rise 8px + scale .98→1; sheets slide from their edge; toasts rise 8px. No bounces, no springs, no infinite loops except the loading spinner. `prefers-reduced-motion` collapses all durations.

**Hover.** Ghost items get a 5% white wash and text brightens to primary. Primary lime lightens to `--lime-300` and gains the glow. Secondary surfaces darken one step and their hairline strengthens. Interactive cards switch to the raised surface.

**Press.** Buttons scale to .97 (icon buttons .94); primary darkens to `--lime-500`. Focus is a 3px lime ring at 40% (`--ring-focus`), keyboard only (`:focus-visible`).

**Selection.** Active nav = solid lime pill with ink text. Selected list row = solid lime pill. Selected table row = 10% lime wash. Selected filter tag = lime tint + lime hairline. Tabs = 2px lime underline.

**Data-viz.** Ordered series `--chart-1…5`: lime, deep lime, pale lime, emerald, graphite. Donut segments separated by small gaps; dashed 6% grid lines; tooltips are inverted (white on black) pills. Positive deltas lime, negative red.

**Responsive principle.** Same features at every size; layout adapts, nothing is cut. Mobile (<640): BottomNav with 4 destinations + "Menu" sheet; KPI swipe carousel; tables stack into label/value cards; dialogs become bottom sheets with full-width stacked actions; menus get 44px rows; every hit target ≥ 44px.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev) outline icons, loaded from CDN (`lucide@0.460.0` UMD) and rendered through the `Icon` component. The reference image uses thin, rounded outline glyphs; Lucide is the closest open match. **This is a substitution** — no icon files were supplied.
- **Style:** 24px grid, 1.75px stroke, round caps/joins, no fills. Never go above 2px stroke.
- **Sizes:** 16 (tables, badges, inline), 18 (buttons, default), 20 (sidebar, top bar), 24 (mobile bottom nav).
- **Color:** inherits `currentColor`; tertiary/secondary text color at rest, primary on hover, ink on lime fills.
- **Containers:** feed/notification icons sit in a 32px lime-tint circle; KPI chips are 28px lime rounded squares with ink glyphs.
- **Common glyphs:** layout-dashboard, shopping-bag, chart-column, users, message-square, star, settings, circle-help, search, bell, moon/sun, refresh-cw, globe, layers, trending-up/down, more-vertical, user-plus, wallet, zap.
- **Not used:** emoji, unicode symbols as icons, icon fonts, PNG icons. The only text glyph used decoratively is the "/" breadcrumb separator and "⌘K" inside keyboard hints.

## Brand mark
No AKP3D logo was provided. Wherever a mark is needed the name is set in Geist 600, tracking -0.03em: **AKP3D** followed by "sistemas" in tertiary gray. Replace with the real logo in `assets/` when available.

## Substitutions to confirm
- **Font:** Geist / Geist Mono (Google Fonts, OFL) chosen as the nearest match to the reference's neutral grotesk. Binaries are local in `assets/fonts/`. Send brand font files if AKP3D has them.
- **Icons:** Lucide via CDN (see above).

---

## Incorporação ao projeto AKP3D

**Origem.** Dump cru do Claude Design (`design-system-export`), triado e reorganizado em 06/10/2026. A pasta de origem foi removida ao final.

**Estado de uso.** O design system está **aplicado ao `index.html` como camada visual**: os 4 `<link>` de `tokens/` e o bloco `<style id="ds-theme">` ligam as variáveis do sistema aos tokens daqui e reestilizam os componentes existentes (superfícies por tom, pílula de destaque no menu, botões em pílula, fonte Geist), com a cor de destaque trocada para o verde do logotipo e todo o texto em maiúsculas (padrão do sistema). Os **componentes React desta pasta não são usados**: o sistema continua em HTML puro, e nenhuma função foi alterada. Os desvios em relação ao design system estão listados no README da raiz.

**Conteúdo incorporado.** 30 arquivos de componente (34 exports) com `.d.ts` e `.prompt.md`, 5 arquivos de tokens, 4 fontes (Geist e Geist Mono), 6 telas do UI kit admin e 32 páginas HTML de referência.

**Fonte da verdade dos tokens.** Os tokens são variáveis CSS em `tokens/*.css`. O dump **não continha** nenhum `DESIGN.md` (padrão Google Labs / Stitch); nada foi recriado. Se um `DESIGN.md` for gerado no futuro, ele deve ficar na raiz desta pasta e passa a ser a referência.

**Decisões da incorporação**
- `reference/runtime/ds-bundle.js` é o bundle compilado dos `.jsx` (confirmado por comparação: não há variante que exista só nele). Fica apenas porque os cards e o UI kit dependem dele para renderizar. Não importe dele em código novo.
- Descartados por serem internos da ferramenta: `_ds_manifest.json` (lista que se reconstrói dos próprios arquivos) e `.thumbnail` (imagem WebP gerada a partir de `thumbnail.html`).
- Arquivos que começavam com `_` foram renomeados (`_ds_bundle.js`, `_adherence.oxlintrc.json`): o GitHub Pages deste repositório usa Jekyll e **não publica** nomes iniciados por `_`.
- `index.js` foi **gerado** na incorporação (não veio do dump). A regra de lint exige importar de um `index.js` que o dump não trazia.
- Os links para React, Babel e Lucide nas páginas de referência continuam apontando para o CDN `unpkg.com`, com os mesmos hashes de integridade do dump.

**Lint de aderência.** Três arquivos em `lint/`:
- `adherence.oxlintrc.json`: a config original do dump, byte a byte. É o formato da ferramenta e **não carrega no oxlint 1.87** (rejeita a chave `x-omelette`; e, mesmo sem ela, o oxlint não implementa a regra `no-restricted-syntax`, que é o coração da aderência).
- `eslint.adherence.mjs`: as mesmas regras traduzidas para ESLint 9, geradas por script a partir do arquivo acima (53 seletores e mensagens idênticos). Os padrões de importação foram ajustados para `design-system/...`.
- O `eslint.config.mjs` da raiz aplica essas regras ao código do projeto, ignorando o código legado e o interior do design system. Rode `npx eslint . --no-error-on-unmatched-pattern` na raiz.

Limites conhecidos: a config valida props contra a lista declarada no `.d.ts` e por isso trata como inválidas props de DOM repassadas por `...rest` (como `onClick` em `IconButton`); o UI kit do próprio design system gera 92 avisos contra ela (`npx eslint --no-ignore design-system/ui_kits`). Todas as regras são `warn`: nenhuma quebra build.
