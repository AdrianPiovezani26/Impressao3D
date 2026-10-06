Data table for lists of records; sortable headers, optional row selection, stacks into cards on mobile.

```jsx
<Card title="Clientes" flush>
  <DataTable selectable defaultSort={{ key: 'total', dir: 'desc' }}
    columns={[
      { key: 'name', label: 'Nome', sortable: true, render: (r) => <ListItem leading={<Avatar name={r.name} />} title={r.name} description={r.email} /> },
      { key: 'deals', label: 'Negócios', align: 'right', sortable: true },
      { key: 'total', label: 'Valor total', align: 'right', sortable: true, render: (r) => 'R$ ' + r.total.toLocaleString('pt-BR') },
    ]}
    rows={customers} />
</Card>
```

- Put inside a `flush` Card so rows run edge-to-edge. Numbers right-aligned and tabular.
- Under 640px each row becomes a block: primary cell on top, other cells as label → value pairs.
