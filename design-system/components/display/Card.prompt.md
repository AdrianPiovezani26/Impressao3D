Base container for every dashboard module; title top-left, actions top-right.

```jsx
<Card title="Visão de vendas" actions={<IconButton icon="more-vertical" label="Mais" size="sm" />}>
  …
</Card>
<Card title="Clientes" flush><DataTable … /></Card>
<Card variant="promo">…</Card>
```

- `default` on app bg, `raised` for featured/nested tiles, `promo` (green radial gradient) at most once per screen.
- Padding 20 desktop → 16 under 640px. Grid gap between cards: 16px (12px mobile).
