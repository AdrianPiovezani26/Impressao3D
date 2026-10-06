import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function IconButton({ icon, label, variant = 'ghost', size = 'md', dot = false, className = '', type = 'button', ...rest }) {
  const isz = size === 'lg' ? 22 : size === 'sm' ? 16 : 20;
  const cls = ['akp-ibtn', variant !== 'ghost' && 'akp-ibtn--' + variant, size !== 'md' && 'akp-ibtn--' + size, className].filter(Boolean).join(' ');
  return (
    <button type={type} className={cls} aria-label={label} title={label} {...rest}>
      <Icon name={icon} size={isz} />
      {dot ? <span className="akp-ibtn__dot" /> : null}
    </button>
  );
}
