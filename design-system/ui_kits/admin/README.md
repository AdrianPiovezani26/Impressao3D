# AKP3D — Admin dashboard UI kit

Responsive, click-through recreation of the AKP3D admin panel, built only from design-system components (`window.AKP3DDesignSystem_42d958`).

Visual source: `../../reference/source/fundamentos-de-ui.jpeg` (dark admin dashboard reference). Product copy is PT-BR.

## Files
- `../../reference/ui-kit-admin/index.html` — app entry; routes between screens, owns theme, sheets and toasts. Persists the current screen in localStorage.
- `../../reference/ui-kit-admin/mobile.html` — the same app framed at 390×844 for the Design System tab.
- `data.js` — mock data (`window.AKP_DATA`) and pt-BR formatters (`window.AKP_FMT`).
- `Shell.jsx` — `useBreakpoint`, `Sidebar`, `SidebarNav`, `Topbar`, `RightRail`, `RailContent`, `PageHeader`, `UserMenu`, `Wordmark`.
- `Overview.jsx` — Visão geral: KPI row, vendas donut, lucro area chart, clientes table, promo card.
- `Orders.jsx` — Pedidos: tabs, filters, selectable table, bulk delete Dialog, order detail Sheet, pagination.
- `Customers.jsx` — Clientes: grid/list toggle, customer cards, table.
- `Settings.jsx` — Configurações: perfil form, notification switches, security alert; theme switch flips `data-theme`.
- `Login.jsx` — sign-in (shown after "Sair" in the user menu).

## Responsive behaviour
| Width | Layout |
|---|---|
| ≥ 1280 | Sidebar 248 · content · right rail 300 |
| 1024–1279 | Sidebar 248 · content; bell opens rail as right Sheet |
| 640–1023 | Sidebar collapsed to 72px icon rail; KPIs 2-up; rows stack |
| < 640 | Top bar (menu · title · search · bell), BottomNav, left Sheet nav, KPI swipe carousel, tables stack into cards, dialogs become bottom sheets |

Nothing is removed on mobile — every desktop destination is reachable from the BottomNav "Menu" sheet, and the right rail is one tap away via the bell. Known gap: table row checkboxes are hidden when rows stack (<640px); bulk actions are desktop/tablet only.

Screens not included (Análises, Mensagens, Avaliações, Ajuda) show a placeholder card.

Preview hook: set `window.__AKP_BP = 'mobile' | 'tablet' | 'desktop' | 'wide'` before load to force a layout.
