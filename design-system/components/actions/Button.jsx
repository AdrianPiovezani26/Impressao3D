import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Button({ variant = 'primary', size = 'md', icon, iconRight, loading = false, block = false, disabled, className = '', children, type = 'button', ...rest }) {
  const isz = size === 'lg' ? 20 : size === 'sm' ? 16 : 18;
  const cls = ['akp-btn', 'akp-btn--' + variant, size !== 'md' && 'akp-btn--' + size, block && 'akp-btn--block', className].filter(Boolean).join(' ');
  return (
    <button type={type} className={cls} disabled={disabled || loading} aria-busy={loading || undefined} {...rest}>
      {loading ? <span className="akp-btn__spin" /> : icon ? <Icon name={icon} size={isz} /> : null}
      {children}
      {iconRight && !loading ? <Icon name={iconRight} size={isz} /> : null}
    </button>
  );
}
