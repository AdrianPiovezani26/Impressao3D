Circular icon-only button — topbar tools, card "more" menus, row actions; always pass `label`.

```jsx
<IconButton icon="bell" label="Notificações" dot />
<IconButton icon="more-vertical" label="Mais opções" size="sm" />
<IconButton icon="star" label="Favoritar" variant="soft" />
```

- ghost (default, toolbar), secondary (raised + hairline), primary (lime), soft (lime tint → solid on hover).
- On mobile keep size md (40) or lg (48) so the hit target clears 44px with surrounding padding.
