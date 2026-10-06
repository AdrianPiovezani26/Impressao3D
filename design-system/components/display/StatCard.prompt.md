KPI tile for the top row of dashboards: label → big tabular number → trend line.

```jsx
<StatCard label="Receita líquida" value="R$ 3.131.021" delta="0,4%" comparison="vs mês anterior" />
<StatCard label="Novos clientes" value="862" delta="-8%" icon="users" variant="raised" />
<StatCard label="Meta trimestral" value="71%" caption="Meta: R$ 1,1 mi"><ProgressBar value={71} /></StatCard>
```

- 4-up grid on desktop, 2-up on tablet, horizontally scrollable or 2-up on mobile.
- Up = lime, down = red. Always pair the delta with a comparison period.
