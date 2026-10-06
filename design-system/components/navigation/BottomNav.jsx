import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function BottomNav({ items = [], value, onChange, className = '', style, ...rest }) {
  return (
    <nav className={'akp-bottomnav ' + className} style={style} {...rest}>
      {items.map((it) => {
        const on = it.value === value;
        return (
          <button key={it.value} type="button" className={'akp-bottomnav__item' + (on ? ' akp-bottomnav__item--on' : '')} aria-current={on ? 'page' : undefined} onClick={() => onChange && onChange(it.value)}>
            <span className="akp-bottomnav__pill"><Icon name={it.icon} size={20} />{it.badge ? <span className="akp-bottomnav__badge">{it.badge}</span> : null}</span>
            {it.label}
          </button>
        );
      })}
    </nav>
  );
}
