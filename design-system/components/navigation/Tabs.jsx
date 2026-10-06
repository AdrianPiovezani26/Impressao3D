import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../display/Badge.jsx';

export function Tabs({ items = [], value, defaultValue, onChange, className = '', ...rest }) {
  const norm = items.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const [inner, setInner] = React.useState(defaultValue ?? (norm[0] && norm[0].value));
  const cur = value !== undefined ? value : inner;
  return (
    <div role="tablist" className={'akp-tabs ' + className} {...rest}>
      {norm.map((t) => (
        <button key={t.value} role="tab" type="button" aria-selected={cur === t.value} className={'akp-tab' + (cur === t.value ? ' akp-tab--on' : '')}
          onClick={() => { setInner(t.value); onChange && onChange(t.value); }}>
          {t.icon ? <Icon name={t.icon} size={16} /> : null}{t.label}
          {t.count != null ? <Badge tone={cur === t.value ? 'accent' : 'neutral'}>{t.count}</Badge> : null}
        </button>
      ))}
    </div>
  );
}
