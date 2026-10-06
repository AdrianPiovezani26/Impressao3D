import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';

export function Sheet({ open = true, onClose, side = 'right', title, width, contained = false, children, className = '' }) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const k = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className={'akp-sheet-scrim' + (contained ? ' akp-sheet-scrim--contained' : '')} onMouseDown={(e) => e.target === e.currentTarget && onClose && onClose()}>
      <aside role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined} className={'akp-sheet akp-sheet--' + side + ' ' + className} style={width ? { '--w': width + 'px' } : undefined}>
        {side === 'bottom' ? <span className="akp-sheet__grab" /> : null}
        {title || onClose ? (
          <div className="akp-sheet__head">
            <h2 className="akp-sheet__title">{title}</h2>
            {onClose ? <IconButton icon="x" label="Fechar" size="sm" onClick={onClose} /> : null}
          </div>
        ) : null}
        <div className="akp-sheet__body">{children}</div>
      </aside>
    </div>
  );
}
