import React from 'react';

export function ProgressBar({ value = 0, max = 100, label, valueLabel, color, size = 'md', className = '', ...rest }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={'akp-progress' + (size === 'lg' ? ' akp-progress--lg' : '') + ' ' + className} {...rest}>
      {label || valueLabel ? <div className="akp-progress__row"><span>{label}</span><b>{valueLabel ?? Math.round(pct) + '%'}</b></div> : null}
      <div className="akp-progress__track" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className="akp-progress__fill" style={{ width: pct + '%', background: color }} />
      </div>
    </div>
  );
}
