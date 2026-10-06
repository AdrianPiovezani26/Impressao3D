Compact pill toggle for 2–4 mutually exclusive views or time ranges on charts and tables.

```jsx
<SegmentedControl options={['Dia', 'Semana', 'Mês']} defaultValue="Semana" onChange={setRange} />
<SegmentedControl block options={[{ value: 'list', label: 'Lista', icon: 'list' }, { value: 'grid', label: 'Grade', icon: 'layout-grid' }]} />
```
