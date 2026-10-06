import React from 'react';

export function Breadcrumbs({ items = [], className = '', ...rest }) {
  return (
    <nav aria-label="Breadcrumb" className={'akp-crumbs ' + className} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last ? <span className="akp-crumbs__cur" aria-current="page">{it.label}</span>
              : <a href={it.href || '#'} onClick={it.onClick}>{it.label}</a>}
            {!last ? <span aria-hidden="true">/</span> : null}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
