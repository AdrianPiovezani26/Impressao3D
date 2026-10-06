import React from 'react';

const toPascal = (n) => n.replace(/(^|[-_\s])(\w)/g, (_, __, c) => c.toUpperCase());

/** Renders a Lucide icon by name. Requires the Lucide UMD script (window.lucide) on the page. */
export function Icon({ name, size = 18, strokeWidth = 1.75, color, className = '', style, title, ...rest }) {
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  const node = lib && lib.icons ? lib.icons[toPascal(name || '')] : null;
  const children = node ? (Array.isArray(node[2]) ? node[2] : node) : [];
  return (
    <span className={'akp-icon ' + className} style={{ width: size, height: size, color, ...style }} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true} {...rest}>
      {node ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
          {children.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
        </svg>
      ) : null}
    </span>
  );
}
