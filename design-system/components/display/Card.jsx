import React from 'react';

export function Card({ title, subtitle, actions, variant = 'default', flush = false, interactive = false, as = 'section', className = '', children, ...rest }) {
  const cls = ['akp-card', variant !== 'default' && 'akp-card--' + variant, flush && 'akp-card--flush', interactive && 'akp-card--interactive', className].filter(Boolean).join(' ');
  const Tag = as;
  return (
    <Tag className={cls} {...rest}>
      {title || actions ? (
        <header className="akp-card__head">
          <div className="akp-card__titles">
            {title ? <h3 className="akp-card__title">{title}</h3> : null}
            {subtitle ? <span className="akp-card__sub">{subtitle}</span> : null}
          </div>
          {actions ? <div className="akp-card__actions">{actions}</div> : null}
        </header>
      ) : null}
      {children}
    </Tag>
  );
}
