Dropdown of actions behind a trigger — typically the card `more-vertical` IconButton or the user avatar.

```jsx
<Menu trigger={<IconButton icon="more-vertical" label="Mais opções" size="sm" />} items={[
  { icon: 'download', label: 'Exportar CSV' },
  { icon: 'refresh-cw', label: 'Atualizar', hint: 'R' },
  '-',
  { icon: 'trash-2', label: 'Remover card', danger: true },
]} />
```

- Items are 36px tall (44px under 640px). Closes on outside click / Esc.
