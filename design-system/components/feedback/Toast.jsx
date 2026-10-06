import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconButton } from '../actions/IconButton.jsx';

const T = {
  success: ['circle-check', 'var(--success-soft)', 'var(--success)'],
  danger: ['circle-alert', 'var(--danger-soft)', 'var(--danger)'],
  warning: ['triangle-alert', 'var(--warning-soft)', 'var(--warning)'],
  info: ['info', 'var(--info-soft)', 'var(--info)'],
  accent: ['bell', 'var(--accent-soft)', 'var(--text-accent)'],
};

export function Toast({ tone = 'success', title, description, action, onClose, className = '', style, ...rest }) {
  const [ic, bg, fg] = T[tone] || T.success;
  return (
    <div role="status" className={'akp-toast ' + className} style={style} {...rest}>
      <span className="akp-toast__ico" style={{ background: bg, color: fg }}><Icon name={ic} size={16} /></span>
      <div className="akp-toast__body">
        <span className="akp-toast__title">{title}</span>
        {description ? <span className="akp-toast__desc">{description}</span> : null}
        {action ? <div className="akp-toast__act">{action}</div> : null}
      </div>
      {onClose ? <IconButton icon="x" label="Fechar" size="sm" onClick={onClose} /> : null}
    </div>
  );
}

export function ToastRegion({ children }) {
  return <div className="akp-toast-region" aria-live="polite">{children}</div>;
}
