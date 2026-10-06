Text field on an inset surface; lime ring on focus. Use for forms, filters and the global search.

```jsx
<Input icon="search" placeholder="Buscar…" kbd="⌘K" />
<Input label="E-mail" type="email" placeholder="nome@empresa.com.br" hint="Usado para login" />
<Input label="CNPJ" error="CNPJ inválido" defaultValue="12.345.678/0001" />
```

- Heights sm 32 / md 40 / lg 48. Font switches to 16px under 640px so iOS doesn't zoom.
- Labels sit above the control, never as placeholder-only.
