import React from 'react';

const COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'];

function arc(cx, cy, r, a0, a1) {
  const p = (a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const [x0, y0] = p(a0), [x1, y1] = p(a1);
  return 'M' + x0 + ' ' + y0 + 'A' + r + ' ' + r + ' 0 ' + (a1 - a0 > Math.PI ? 1 : 0) + ' 1 ' + x1 + ' ' + y1;
}

export function DonutChart({ data = [], size = 180, thickness = 22, gap = 0.035, value, label, className = '', ...rest }) {
  const [hover, setHover] = React.useState(-1);
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2, c = size / 2;
  let a = -Math.PI / 2;
  const segs = data.map((d, i) => {
    const span = (d.value / total) * Math.PI * 2;
    const s = { d: arc(c, c, r, a + gap / 2, a + span - gap / 2), color: d.color || COLORS[i % COLORS.length] };
    a += span; return s;
  });
  const h = hover >= 0 ? data[hover] : null;
  return (
    <div className={'akp-donut ' + className} style={{ width: size, height: size }} {...rest}>
      <svg width={size} height={size} viewBox={'0 0 ' + size + ' ' + size}>
        <circle cx={c} cy={c} r={r} fill="none" stroke="var(--surface-pressed)" strokeWidth={thickness} />
        {segs.map((s, i) => (
          <path key={i} d={s.d} fill="none" stroke={s.color} strokeWidth={thickness} strokeLinecap="butt"
            opacity={hover < 0 || hover === i ? 1 : 0.35} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(-1)} style={{ cursor: 'pointer' }} />
        ))}
      </svg>
      <div className="akp-donut__center">
        <span className="akp-donut__value">{h ? h.display ?? h.value : value}</span>
        <span className="akp-donut__label">{h ? h.label : label}</span>
      </div>
    </div>
  );
}

export function ChartLegend({ items = [], columns = 2 }) {
  return (
    <div className="akp-legend" style={{ gridTemplateColumns: 'repeat(' + columns + ', minmax(0,1fr))' }}>
      {items.map((it, i) => (
        <div className="akp-legend__item" key={i}>
          <span className="akp-legend__key"><span className="akp-legend__sw" style={{ background: it.color || COLORS[i % COLORS.length] }} />{it.label}</span>
          <span className="akp-legend__val">{it.display ?? it.value}</span>
        </div>
      ))}
    </div>
  );
}
