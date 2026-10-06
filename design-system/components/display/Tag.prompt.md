Outlined chip for filters and labels; becomes a toggle button when `onClick` is passed.

```jsx
<Tag icon="zap">Plano Premium</Tag>
<Tag selected onClick={toggle}>Eletrônicos</Tag>
<Tag onRemove={() => remove('sp')}>São Paulo</Tag>
```
