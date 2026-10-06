import React from 'react';

export function Radio({ label, description, disabled, className = '', ...rest }) {
  return (
    <label className={'akp-check' + (disabled ? ' akp-check--disabled' : '') + ' ' + className}>
      <input type="radio" disabled={disabled} {...rest} />
      <span className="akp-check__box akp-check__box--radio"><span className="akp-check__dot" /></span>
      {label || description ? (
        <span className="akp-check__txt">{label}{description ? <span className="akp-check__desc">{description}</span> : null}</span>
      ) : null}
    </label>
  );
}
