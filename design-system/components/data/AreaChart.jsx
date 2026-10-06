import React from 'react';

function smooth(pts) {
  if (pts.length < 2) return '';
  let d = 'M' + pts[0][0] + ' ' + pts[0][1];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i - 1] || pts[i], [x1, y1] = pts[i], [x2, y2] = pts[i + 1], [x3, y3] = pts[i + 2] || pts[i + 1];
    const t = 0.18;
    d += ' C' + (x1 + (x2 - x0) * t) + ' ' + (y1 + (y2 - y0) * t) + ' ' + (x2 - (x3 - x1) * t) + ' ' + (y2 - (y3 - y1) * t) + ' ' + x2 + ' ' + y2;
  }
  return d;
}

export function AreaChart({ data = [], labels, height = 160, color = 'var(--emerald-400)', grid = true, formatValue = (v) => v, showAxis = true, className = '', ...rest }) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(400);
  const [hi, setHi] = React.useState(-1);
  const gid = React.useMemo(() => 'akpg' + Math.random().toString(36).slice(2, 8), []);
  React.useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width || 400));
    ro.observe(ref.current); return () => ro.disconnect();
  }, []);
  const max = Math.max(...data, 1), min = Math.min(...data, 0), pad = 6;
  const pts = data.map((v, i) => [(i / Math.max(data.length - 1, 1)) * w, pad + (1 - (v - min) / (max - min || 1)) * (height - pad * 2)]);
  const line = smooth(pts);
  const area = line ? line + ' L' + w + ' ' + height + ' L0 ' + height + ' Z' : '';
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const i = Math.round(((e.clientX - r.left) / r.width) * (data.length - 1));
    setHi(Math.max(0, Math.min(data.length - 1, i)));
  };
  return (
    <div className={'akp-area ' + className} {...rest}>
      <div ref={ref} style={{ position: 'relative' }} onMouseMove={onMove} onMouseLeave={() => setHi(-1)}>
        <svg height={height} viewBox={'0 0 ' + w + ' ' + height} preserveAspectRatio="none">
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.5" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          {grid ? [0.25, 0.5, 0.75].map((g) => <line key={g} x1="0" x2={w} y1={height * g} y2={height * g} stroke="var(--chart-grid)" strokeDasharray="3 4" />) : null}
          <path d={area} fill={'url(#' + gid + ')'} />
          <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          {hi >= 0 && pts[hi] ? (
            <g>
              <line x1={pts[hi][0]} x2={pts[hi][0]} y1="0" y2={height} stroke="var(--border-strong)" strokeDasharray="2 3" />
              <circle cx={pts[hi][0]} cy={pts[hi][1]} r="5" fill="var(--bg-app)" stroke={color} strokeWidth="2" />
            </g>
          ) : null}
        </svg>
        {hi >= 0 && pts[hi] ? (
          <div className="akp-area__tip" style={{ left: pts[hi][0], top: pts[hi][1] }}>
            {labels ? <div style={{ opacity: 0.6, fontWeight: 400 }}>{labels[hi]}</div> : null}{formatValue(data[hi])}
          </div>
        ) : null}
      </div>
      {showAxis && labels ? (
        <div className="akp-area__axis">{labels.filter((_, i) => i % Math.ceil(labels.length / 6) === 0).map((l) => <span key={l}>{l}</span>)}</div>
      ) : null}
    </div>
  );
}
