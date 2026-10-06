import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function ListItem({ leading, icon, title, description, meta, trailing, selected = false, timeline = false, shape = 'pill', onClick, className = '', ...rest }) {
  const cls = ['akp-li', shape === 'rect' && 'akp-li--rect', onClick && 'akp-li--clickable', selected && 'akp-li--selected', timeline && 'akp-li--timeline', className].filter(Boolean).join(' ');
  return (
    <div className={cls} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined} {...rest}>
      {leading || icon ? <span className="akp-li__lead">{leading || <span className="akp-li__ico"><Icon name={icon} size={16} /></span>}</span> : null}
      <span className="akp-li__body">
        <span className="akp-li__title">{title}</span>
        {description ? <span className="akp-li__desc">{description}</span> : null}
      </span>
      {meta ? <span className="akp-li__meta">{meta}</span> : null}
      {trailing ? <span className="akp-li__trail" onClick={(e) => e.stopPropagation()}>{trailing}</span> : null}
    </div>
  );
}
