Generic feed/list row — leading icon or avatar, title + description, optional meta and trailing actions.

```jsx
<ListItem icon="user-plus" title="56 novos usuários cadastrados" description="Agora mesmo" />
<ListItem timeline leading={<Avatar name="Ana Lima" size={24} />} title="Alterou o tema" description="Há 2 h" />
<ListItem selected leading={<Avatar name="Nataniel Donowan" />} title="Nataniel Donowan"
  trailing={<><IconButton icon="mail" label="E-mail" size="sm" /><IconButton icon="phone" label="Ligar" size="sm" /></>} />
```

- Stack rows with 4px gap. `selected` = solid lime pill (one per list).
