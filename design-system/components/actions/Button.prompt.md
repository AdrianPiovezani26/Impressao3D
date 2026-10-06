Pill-shaped button for actions; `primary` is the lime call-to-action and should appear once per region.

```jsx
<Button icon="plus">Novo pedido</Button>
<Button variant="secondary" iconRight="chevron-down">Exportar</Button>
<Button variant="ghost" size="sm">Cancelar</Button>
<Button size="lg" block>Começar agora</Button>
```

- Variants: primary (lime fill, ink text, glow on hover), secondary (raised surface + hairline), ghost (text only), danger (soft red → solid on hover).
- Sizes sm 32 / md 40 / lg 48. On mobile, primary form actions use `size="lg" block`.
- `loading` swaps the leading icon for a spinner and disables the button.
