Inline tinted message for persistent states (sync failed, plan expiring). For transient confirmations use Toast.

```jsx
<Alert tone="warning" title="Certificado expira em 5 dias">Renove para manter a emissão de notas.</Alert>
<Alert tone="danger" title="Falha na sincronização" action={<Button size="sm" variant="ghost">Tentar de novo</Button>} />
```
