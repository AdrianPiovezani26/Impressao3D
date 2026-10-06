import React from 'react';
import { Icon } from '../core/Icon.jsx';

function range(page, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const out = [1];
  const s = Math.max(2, page - 1), e = Math.min(total - 1, page + 1);
  if (s > 2) out.push('…');
  for (let i = s; i <= e; i++) out.push(i);
  if (e < total - 1) out.push('…');
  out.push(total);
  return out;
}

export function Pagination({ page = 1, totalPages = 1, onChange, info, compact = false, className = '' }) {
  const go = (p) => onChange && onChange(Math.max(1, Math.min(totalPages, p)));
  return (
    <nav className={'akp-pager ' + className} aria-label="Paginação">
      {info ? <span className="akp-pager__info">{info}</span> : null}
      <button className="akp-pager__btn" disabled={page <= 1} onClick={() => go(page - 1)} aria-label="Anterior"><Icon name="chevron-left" size={16} /></button>
      {compact ? <span className="akp-pager__gap">{page} / {totalPages}</span> : range(page, totalPages).map((p, i) =>
        p === '…' ? <span key={'g' + i} className="akp-pager__gap">…</span>
          : <button key={p} className={'akp-pager__btn' + (p === page ? ' akp-pager__btn--on' : '')} aria-current={p === page ? 'page' : undefined} onClick={() => go(p)}>{p}</button>
      )}
      <button className="akp-pager__btn" disabled={page >= totalPages} onClick={() => go(page + 1)} aria-label="Próxima"><Icon name="chevron-right" size={16} /></button>
    </nav>
  );
}
