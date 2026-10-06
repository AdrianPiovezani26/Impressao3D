import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function SegmentedControl({ options = [], value, defaultValue, onChange, block = false, className = '', ...rest }) {
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const [inner, setInner] = React.useState(defaultValue ?? (norm[0] && norm[0].value));
  const cur = value !== undefined ? value : inner;
  return (
    <div role="tablist" className={'akp-seg' + (block ? ' akp-seg--block' : '') + ' ' + className} {...rest}>
      {norm.map((o) => (
        <button key={o.value} type="button" role="tab" aria-selected={cur === o.value} className={'akp-seg__btn' + (cur === o.value ? ' akp-seg__btn--on' : '')}
          onClick={() => { setInner(o.value); onChange && onChange(o.value); }}>
          {o.icon ? <Icon name={o.icon} size={14} /> : null}{o.label}
        </button>
      ))}
    </div>
  );
}
