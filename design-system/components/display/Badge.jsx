import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Badge({ tone = 'neutral', variant = 'soft', size = 'sm', dot = false, icon, className = '', children, ...rest }) {
  const cls = ['akp-badge', 'akp-badge--' + tone, variant === 'solid' && 'akp-badge--solid', size === 'md' && 'akp-badge--md', className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...rest}>
      {dot ? <span className="akp-badge__dot" /> : null}
      {icon ? <Icon name={icon} size={12} strokeWidth={2} /> : null}
      {children}
    </span>
  );
}
