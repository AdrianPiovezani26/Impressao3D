Modal for confirmations and short forms. Primary action last (rightmost on desktop, top on mobile).

```jsx
<Dialog open={open} onClose={close} title="Excluir produto?" description="Esta ação não pode ser desfeita."
  footer={<><Button variant="ghost" onClick={close}>Cancelar</Button><Button variant="danger">Excluir</Button></>} />
```

- Esc and scrim click close. Keep body short; for long forms use a Sheet.
