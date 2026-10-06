import React from 'react';

export function Switch({ label, disabled, className = '', ...rest }) {
  return (
    <label className={'akp-switch' + (disabled ? ' akp-switch--disabled' : '') + ' ' + className}>
      <input type="checkbox" role="switch" disabled={disabled} {...rest} />
      <span className="akp-switch__track"><span className="akp-switch__thumb" /></span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
