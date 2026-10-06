import React from 'react';

export function Tooltip({ content, kbd, placement = 'top', open, children, className = '' }) {
  return (
    <span className={'akp-tip-wrap ' + className}>
      {children}
      <span role="tooltip" className={'akp-tip akp-tip--' + placement + (open ? ' akp-tip--open' : '')}>
        {content}{kbd ? <span className="akp-kbd">{kbd}</span> : null}
      </span>
    </span>
  );
}
