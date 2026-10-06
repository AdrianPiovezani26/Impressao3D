Sidebar link row with icon; the current page is a solid lime pill. Group rows with NavSection.

```jsx
<NavSection label="Painéis">
  <NavItem icon="layout-dashboard" label="Visão geral" active />
  <NavItem icon="shopping-bag" label="E-commerce" expandable />
  <NavItem icon="message-square" label="Mensagens" badge={5} />
</NavSection>
```

- `collapsed` renders icon-only (tablet 72px rail). On mobile the same items move into a left Sheet + BottomNav.
