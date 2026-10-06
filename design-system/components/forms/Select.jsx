import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Select({ label, hint, error, icon, options = [], size = 'md', disabled, id, className = '', style, ...rest }) {
  const fid = id || (label ? 'sel-' + String(label).toLowerCase().replace(/\W+/g, '-') : undefined);
  const ctl = ['akp-control', size !== 'md' && 'akp-control--' + size, error && 'akp-control--error', disabled && 'akp-control--disabled'].filter(Boolean).join(' ');
  return (
    <div className={'akp-field ' + className} style={style}>
      {label ? <label className="akp-field__label" htmlFor={fid}>{label}</label> : null}
      <div className={ctl}>
        {icon ? <Icon name={icon} size={16} /> : null}
        <select id={fid} disabled={disabled} {...rest}>
          {options.map((o) => {
            const opt = typeof o === 'string' ? { value: o, label: o } : o;
            return <option key={opt.value} value={opt.value}>{opt.label}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={16} style={{ pointerEvents: 'none' }} />
      </div>
      {error || hint ? <span className={'akp-field__hint' + (error ? ' akp-field__hint--error' : '')}>{error || hint}</span> : null}
    </div>
  );
}
