Short-lived feedback after an action ("Pedido salvo"). Render inside ToastRegion; auto-dismiss after ~4s.

```jsx
<ToastRegion>
  <Toast tone="success" title="Pedido #4821 salvo" description="O cliente foi notificado por e-mail." onClose={hide} />
</ToastRegion>
```
