Native `<select>` in the AKP3D control shell — period pickers ("Hoje", "Últimos 7 dias"), form choices.

```jsx
<Select size="sm" options={['Hoje', 'Últimos 7 dias', 'Este mês']} />
<Select label="Status" options={[{ value: 'paid', label: 'Pago' }, { value: 'pending', label: 'Pendente' }]} />
```

- Stays native so phones get the OS picker. For rich action lists use Menu instead.
