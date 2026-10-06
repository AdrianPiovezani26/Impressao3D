Trend chart for revenue/profit over time; emerald gradient by default, lime for the primary metric.

```jsx
<AreaChart data={[12, 18, 15, 22, 30, 26, 38]} labels={['Seg','Ter','Qua','Qui','Sex','Sáb','Dom']}
  formatValue={(v) => 'R$ ' + v + ' mil'} height={180} />
```

- Fluid: fills its container width (ResizeObserver). Use `showAxis={false}` for sparklines inside StatCard.
