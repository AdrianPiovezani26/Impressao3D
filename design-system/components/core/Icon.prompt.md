Lucide outline icon at the AKP3D default weight (1.75 stroke); use for every glyph in the UI — never emoji or unicode symbols.

```jsx
<Icon name="layout-dashboard" size={20} />
<Icon name="trending-up" size={16} color="var(--accent)" />
```

- Sizes: 16 (inline, tables, badges), 18 (buttons, default), 20 (nav, topbar), 24 (mobile bottom nav).
- Inherits `currentColor`; color through the parent, not the icon, wherever possible.
- Requires the Lucide UMD script loaded before the DS bundle.
