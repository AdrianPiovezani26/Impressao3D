import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Checkbox({ label, description, disabled, className = '', ...rest }) {
  return (
    <label className={'akp-check' + (disabled ? ' akp-check--disabled' : '') + ' ' + className}>
      <input type="checkbox" disabled={disabled} {...rest} />
      <span className="akp-check__box"><Icon name="check" size={13} strokeWidth={3} /></span>
      {label || description ? (
        <span className="akp-check__txt">{label}{description ? <span className="akp-check__desc">{description}</span> : null}</span>
      ) : null}
    </label>
  );
}
