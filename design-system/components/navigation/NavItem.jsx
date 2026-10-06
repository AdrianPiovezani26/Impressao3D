import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Badge } from '../display/Badge.jsx';

export function NavItem({ icon, label, active = false, badge, collapsed = false, expandable = false, href, onClick, className = '', ...rest }) {
  const cls = ['akp-nav', active && 'akp-nav--active', collapsed && 'akp-nav--collapsed', className].filter(Boolean).join(' ');
  const T = href ? 'a' : 'button';
  return (
    <T className={cls} href={href} type={href ? undefined : 'button'} onClick={onClick} aria-current={active ? 'page' : undefined} title={collapsed ? label : undefined} {...rest}>
      {expandable ? <span className="akp-nav__chev"><Icon name="chevron-right" size={14} /></span> : null}
      {icon ? <Icon name={icon} size={18} /> : null}
      <span className="akp-nav__label">{label}</span>
      {badge != null ? <Badge tone={active ? 'neutral' : 'accent'} variant={active ? 'solid' : 'soft'}>{badge}</Badge> : null}
    </T>
  );
}

export function NavSection({ label, children, collapsed = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {label && !collapsed ? <div className="akp-nav-section">{label}</div> : <div style={{ height: 16 }} />}
      {children}
    </div>
  );
}
