Mobile bottom tab bar replacing the sidebar under 640px; keep to 4–5 items with the last one "Menu" opening the full nav Sheet.

```jsx
<BottomNav value={tab} onChange={setTab} items={[
  { value: 'home', label: 'Início', icon: 'layout-dashboard' },
  { value: 'orders', label: 'Pedidos', icon: 'shopping-bag', badge: 3 },
  { value: 'customers', label: 'Clientes', icon: 'users' },
  { value: 'menu', label: 'Menu', icon: 'menu' },
]} />
```

- 64px tall + safe-area inset. Each item ≥ 44px wide.
