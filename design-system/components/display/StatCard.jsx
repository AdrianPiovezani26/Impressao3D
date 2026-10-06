import React from 'react';
import { Card } from './Card.jsx';
import { Icon } from '../core/Icon.jsx';

export function StatCard({ label, value, delta, trend, comparison, icon, caption, variant = 'default', className = '', children, ...rest }) {
  const dir = trend || (typeof delta === 'string' && delta.trim().startsWith('-') ? 'down' : 'up');
  const ti = dir === 'down' ? 'trending-down' : dir === 'flat' ? 'minus' : 'trending-up';
  return (
    <Card variant={variant} className={'akp-stat ' + className} {...rest}>
      <div className="akp-stat__label">
        {icon ? <span className="akp-stat__chip"><Icon name={icon} size={16} /></span> : null}
        <span>{label}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: -4 }}>
        <span className="akp-stat__value">{value}</span>
        {delta || comparison || caption ? (
          <div className="akp-stat__foot">
            {delta ? <span className={'akp-trend akp-trend--' + dir}><Icon name={ti} size={14} />{delta}</span> : null}
            {comparison ? <span>{comparison}</span> : null}
            {caption ? <span style={{ color: 'var(--text-tertiary)' }}>{caption}</span> : null}
          </div>
        ) : null}
      </div>
      {children}
    </Card>
  );
}
