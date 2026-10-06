import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Tag({ icon, selected = false, onRemove, onClick, size = 'md', className = '', children, ...rest }) {
  const cls = ['akp-tag', selected && 'akp-tag--selected', size === 'sm' && 'akp-tag--sm', className].filter(Boolean).join(' ');
  const inner = (
    <>
      {icon ? <Icon name={icon} size={size === 'sm' ? 12 : 14} /> : null}
      {children}
      {onRemove ? (
        <span role="button" tabIndex={0} aria-label="Remover" className="akp-tag__x" onClick={(e) => { e.stopPropagation(); onRemove(e); }}>
          <Icon name="x" size={12} />
        </span>
      ) : null}
    </>
  );
  return onClick
    ? <button type="button" className={cls} aria-pressed={selected} onClick={onClick} {...rest}>{inner}</button>
    : <span className={cls} {...rest}>{inner}</span>;
}
