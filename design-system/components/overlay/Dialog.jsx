import React from 'react';
import { IconButton } from '../actions/IconButton.jsx';

export function Dialog({ open = true, onClose, title, description, footer, width = 480, contained = false, children, className = '' }) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const k = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className={'akp-scrim' + (contained ? ' akp-scrim--contained' : '')} onMouseDown={(e) => e.target === e.currentTarget && onClose && onClose()}>
      <div role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined} className={'akp-dialog ' + className} style={{ '--w': width + 'px' }}>
        <div className="akp-dialog__head">
          <div className="akp-dialog__titles">
            {title ? <h2 className="akp-dialog__title">{title}</h2> : null}
            {description ? <p className="akp-dialog__desc">{description}</p> : null}
          </div>
          {onClose ? <IconButton icon="x" label="Fechar" size="sm" onClick={onClose} /> : null}
        </div>
        {children ? <div className="akp-dialog__body">{children}</div> : <div style={{ height: 20 }} />}
        {footer ? <div className="akp-dialog__foot">{footer}</div> : null}
      </div>
    </div>
  );
}
