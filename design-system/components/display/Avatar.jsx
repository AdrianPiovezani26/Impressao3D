import React from 'react';

const TINTS = ['var(--lime-200)', 'var(--emerald-300)', 'var(--lime-100)', '#B9D7FF', '#FFD9A8', '#E3D4FF'];
const initials = (n = '') => n.trim().split(/\s+/).slice(0, 2).map((p) => p[0]).join('').toUpperCase();

export function Avatar({ name = '', src, size = 32, status, ring = false, className = '', style, ...rest }) {
  const tint = TINTS[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % TINTS.length];
  const sc = { online: 'var(--emerald-400)', away: 'var(--amber-400)', busy: 'var(--red-400)', offline: 'var(--ink-500)' }[status];
  return (
    <span className={'akp-avatar' + (ring ? ' akp-avatar--ring' : '') + ' ' + className} style={{ '--s': size + 'px', background: src ? 'var(--surface-card-raised)' : tint, ...style }} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
      {status ? <span className="akp-avatar__status" style={{ background: sc }} /> : null}
    </span>
  );
}

export function AvatarGroup({ children, className = '' }) {
  return <span className={'akp-avatar-group ' + className}>{children}</span>;
}
