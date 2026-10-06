import React from 'react';
import { Icon } from '../core/Icon.jsx';

const ICONS = { info: 'info', success: 'circle-check', warning: 'triangle-alert', danger: 'circle-alert', accent: 'sparkles' };

export function Alert({ tone = 'info', title, children, icon, action, className = '', ...rest }) {
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} className={'akp-alert akp-alert--' + tone + ' ' + className} {...rest}>
      <Icon name={icon || ICONS[tone]} size={18} className="akp-alert__ico" />
      <div className="akp-alert__body">
        {title ? <span className="akp-alert__title">{title}</span> : null}
        {children ? <span className="akp-alert__desc">{children}</span> : null}
      </div>
      {action}
    </div>
  );
}
