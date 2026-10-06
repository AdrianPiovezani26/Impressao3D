Ring chart for category share with a KPI in the center; pair with ChartLegend.

```jsx
const cats = [{ label: 'Eletrônicos', value: 55640, display: 'R$ 55.640' }, { label: 'Móveis', value: 11420, display: 'R$ 11.420' }];
<DonutChart data={cats} value="102 mil" label="Visitas/semana" />
<ChartLegend items={cats} />
```

- Colors follow --chart-1…5 (lime → deep lime → pale lime → emerald → graphite). Max 5 segments; group the rest as "Outros".
