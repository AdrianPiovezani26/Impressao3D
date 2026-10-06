import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Menu({ trigger, items = [], align = 'end', open: openProp, onOpenChange, className = '' }) {
  const [inner, setInner] = React.useState(false);
  const open = openProp !== undefined ? openProp : inner;
  const set = (v) => { setInner(v); onOpenChange && onOpenChange(v); };
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) set(false); };
    const k = (e) => e.key === 'Escape' && set(false);
    document.addEventListener('mousedown', h); window.addEventListener('keydown', k);
    return () => { document.removeEventListener('mousedown', h); window.removeEventListener('keydown', k); };
  }, [open]);
  return (
    <span ref={ref} className={'akp-menu-wrap ' + className}>
      <span onClick={() => set(!open)} aria-haspopup="menu" aria-expanded={open} style={{ display: 'inline-flex' }}>{trigger}</span>
      {open ? (
        <div role="menu" className={'akp-menu akp-menu--' + align}>
          {items.map((it, i) => {
            if (it === '-' || it.separator) return <div key={i} className="akp-menu__sep" />;
            if (it.heading) return <div key={i} className="akp-menu__label">{it.heading}</div>;
            return (
              <button key={i} role="menuitem" type="button" className={'akp-menu__item' + (it.danger ? ' akp-menu__item--danger' : '') + (it.checked ? ' akp-menu__item--on' : '')}
                onClick={() => { it.onSelect && it.onSelect(); set(false); }}>
                {it.icon ? <Icon name={it.icon} size={16} /> : null}
                {it.label}
                {it.checked ? <Icon name="check" size={16} style={{ marginLeft: 'auto', color: 'var(--text-accent)' }} /> : it.hint ? <span className="akp-menu__hint">{it.hint}</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </span>
  );
}
