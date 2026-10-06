import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Input({ label, hint, error, icon, kbd, trailing, size = 'md', disabled, id, className = '', style, ...rest }) {
  const fid = id || (label ? 'in-' + String(label).toLowerCase().replace(/\W+/g, '-') : undefined);
  const ctl = ['akp-control', size !== 'md' && 'akp-control--' + size, error && 'akp-control--error', disabled && 'akp-control--disabled'].filter(Boolean).join(' ');
  return (
    <div className={'akp-field ' + className} style={style}>
      {label ? <label className="akp-field__label" htmlFor={fid}>{label}</label> : null}
      <div className={ctl}>
        {icon ? <Icon name={icon} size={16} /> : null}
        <input id={fid} disabled={disabled} aria-invalid={!!error || undefined} {...rest} />
        {kbd ? <span className="akp-kbd">{kbd}</span> : null}
        {trailing}
      </div>
      {error || hint ? <span className={'akp-field__hint' + (error ? ' akp-field__hint--error' : '')}>{error || hint}</span> : null}
    </div>
  );
}
