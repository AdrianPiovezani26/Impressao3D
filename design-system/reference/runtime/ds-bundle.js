/* @ds-bundle: {"format":4,"namespace":"AKP3DDesignSystem_42d958","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"AreaChart","sourcePath":"components/data/AreaChart.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DonutChart","sourcePath":"components/data/DonutChart.jsx"},{"name":"ChartLegend","sourcePath":"components/data/DonutChart.jsx"},{"name":"ListItem","sourcePath":"components/data/ListItem.jsx"},{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"StatCard","sourcePath":"components/display/StatCard.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastRegion","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"NavSection","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Menu","sourcePath":"components/overlay/Menu.jsx"},{"name":"Sheet","sourcePath":"components/overlay/Sheet.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"5621044fbb5d","components/actions/IconButton.jsx":"b0b75ba76c95","components/core/Icon.jsx":"860439f59662","components/data/AreaChart.jsx":"a41e29329add","components/data/DataTable.jsx":"a9c84f02be15","components/data/DonutChart.jsx":"bb6b7074b64d","components/data/ListItem.jsx":"b632dd1979c2","components/data/ProgressBar.jsx":"38dc5934cb4f","components/display/Avatar.jsx":"55e04cbf60c4","components/display/Badge.jsx":"4c3ac60e4aff","components/display/Card.jsx":"f750949b08d8","components/display/StatCard.jsx":"e9c1f82d7493","components/display/Tag.jsx":"6fdafb6d7a85","components/feedback/Alert.jsx":"822a8abc919c","components/feedback/Toast.jsx":"a556c0b452ab","components/feedback/Tooltip.jsx":"faba49ce19e4","components/forms/Checkbox.jsx":"0a02f3424c38","components/forms/Input.jsx":"8eb4c6130a1d","components/forms/Radio.jsx":"b9ee983edc78","components/forms/SegmentedControl.jsx":"7340da892ab9","components/forms/Select.jsx":"24528f108bf1","components/forms/Switch.jsx":"5a6733eb087c","components/navigation/BottomNav.jsx":"da9fabf51c67","components/navigation/Breadcrumbs.jsx":"ebc0a2605007","components/navigation/NavItem.jsx":"af1ad261388e","components/navigation/Pagination.jsx":"025ebd865265","components/navigation/Tabs.jsx":"dfa0c1dcf977","components/overlay/Dialog.jsx":"d44b90b27805","components/overlay/Menu.jsx":"868a8a8e6205","components/overlay/Sheet.jsx":"0d6e834652df","ui_kits/admin/Customers.jsx":"37ae5ede6a02","ui_kits/admin/Login.jsx":"8cef9c16a749","ui_kits/admin/Orders.jsx":"e253e8d69a6c","ui_kits/admin/Overview.jsx":"80b99c7f8e81","ui_kits/admin/Settings.jsx":"4d259dcc75a0","ui_kits/admin/Shell.jsx":"dba0afe19e78","ui_kits/admin/data.js":"c0e40a76a6b9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AKP3DDesignSystem_42d958 = window.AKP3DDesignSystem_42d958 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toPascal = n => n.replace(/(^|[-_\s])(\w)/g, (_, __, c) => c.toUpperCase());

/** Renders a Lucide icon by name. Requires the Lucide UMD script (window.lucide) on the page. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  color,
  className = '',
  style,
  title,
  ...rest
}) {
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  const node = lib && lib.icons ? lib.icons[toPascal(name || '')] : null;
  const children = node ? Array.isArray(node[2]) ? node[2] : node : [];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'akp-icon ' + className,
    style: {
      width: size,
      height: size,
      color,
      ...style
    },
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true
  }, rest), node ? /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  }))) : null);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  block = false,
  disabled,
  className = '',
  children,
  type = 'button',
  ...rest
}) {
  const isz = size === 'lg' ? 20 : size === 'sm' ? 16 : 18;
  const cls = ['akp-btn', 'akp-btn--' + variant, size !== 'md' && 'akp-btn--' + size, block && 'akp-btn--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "akp-btn__spin"
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: isz
  }) : null, children, iconRight && !loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: isz
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  dot = false,
  className = '',
  type = 'button',
  ...rest
}) {
  const isz = size === 'lg' ? 22 : size === 'sm' ? 16 : 20;
  const cls = ['akp-ibtn', variant !== 'ghost' && 'akp-ibtn--' + variant, size !== 'md' && 'akp-ibtn--' + size, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    "aria-label": label,
    title: label
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: isz
  }), dot ? /*#__PURE__*/React.createElement("span", {
    className: "akp-ibtn__dot"
  }) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/AreaChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function smooth(pts) {
  if (pts.length < 2) return '';
  let d = 'M' + pts[0][0] + ' ' + pts[0][1];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i - 1] || pts[i],
      [x1, y1] = pts[i],
      [x2, y2] = pts[i + 1],
      [x3, y3] = pts[i + 2] || pts[i + 1];
    const t = 0.18;
    d += ' C' + (x1 + (x2 - x0) * t) + ' ' + (y1 + (y2 - y0) * t) + ' ' + (x2 - (x3 - x1) * t) + ' ' + (y2 - (y3 - y1) * t) + ' ' + x2 + ' ' + y2;
  }
  return d;
}
function AreaChart({
  data = [],
  labels,
  height = 160,
  color = 'var(--emerald-400)',
  grid = true,
  formatValue = v => v,
  showAxis = true,
  className = '',
  ...rest
}) {
  const ref = React.useRef(null);
  const [w, setW] = React.useState(400);
  const [hi, setHi] = React.useState(-1);
  const gid = React.useMemo(() => 'akpg' + Math.random().toString(36).slice(2, 8), []);
  React.useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([e]) => setW(e.contentRect.width || 400));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const max = Math.max(...data, 1),
    min = Math.min(...data, 0),
    pad = 6;
  const pts = data.map((v, i) => [i / Math.max(data.length - 1, 1) * w, pad + (1 - (v - min) / (max - min || 1)) * (height - pad * 2)]);
  const line = smooth(pts);
  const area = line ? line + ' L' + w + ' ' + height + ' L0 ' + height + ' Z' : '';
  const onMove = e => {
    const r = ref.current.getBoundingClientRect();
    const i = Math.round((e.clientX - r.left) / r.width * (data.length - 1));
    setHi(Math.max(0, Math.min(data.length - 1, i)));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'akp-area ' + className
  }, rest), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative'
    },
    onMouseMove: onMove,
    onMouseLeave: () => setHi(-1)
  }, /*#__PURE__*/React.createElement("svg", {
    height: height,
    viewBox: '0 0 ' + w + ' ' + height,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: color,
    stopOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: color,
    stopOpacity: "0"
  }))), grid ? [0.25, 0.5, 0.75].map(g => /*#__PURE__*/React.createElement("line", {
    key: g,
    x1: "0",
    x2: w,
    y1: height * g,
    y2: height * g,
    stroke: "var(--chart-grid)",
    strokeDasharray: "3 4"
  })) : null, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: 'url(#' + gid + ')'
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), hi >= 0 && pts[hi] ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: pts[hi][0],
    x2: pts[hi][0],
    y1: "0",
    y2: height,
    stroke: "var(--border-strong)",
    strokeDasharray: "2 3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: pts[hi][0],
    cy: pts[hi][1],
    r: "5",
    fill: "var(--bg-app)",
    stroke: color,
    strokeWidth: "2"
  })) : null), hi >= 0 && pts[hi] ? /*#__PURE__*/React.createElement("div", {
    className: "akp-area__tip",
    style: {
      left: pts[hi][0],
      top: pts[hi][1]
    }
  }, labels ? /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.6,
      fontWeight: 400
    }
  }, labels[hi]) : null, formatValue(data[hi])) : null), showAxis && labels ? /*#__PURE__*/React.createElement("div", {
    className: "akp-area__axis"
  }, labels.filter((_, i) => i % Math.ceil(labels.length / 6) === 0).map(l => /*#__PURE__*/React.createElement("span", {
    key: l
  }, l))) : null);
}
Object.assign(__ds_scope, { AreaChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/AreaChart.jsx", error: String((e && e.message) || e) }); }

// components/data/DonutChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'];
function arc(cx, cy, r, a0, a1) {
  const p = a => [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  const [x0, y0] = p(a0),
    [x1, y1] = p(a1);
  return 'M' + x0 + ' ' + y0 + 'A' + r + ' ' + r + ' 0 ' + (a1 - a0 > Math.PI ? 1 : 0) + ' 1 ' + x1 + ' ' + y1;
}
function DonutChart({
  data = [],
  size = 180,
  thickness = 22,
  gap = 0.035,
  value,
  label,
  className = '',
  ...rest
}) {
  const [hover, setHover] = React.useState(-1);
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2,
    c = size / 2;
  let a = -Math.PI / 2;
  const segs = data.map((d, i) => {
    const span = d.value / total * Math.PI * 2;
    const s = {
      d: arc(c, c, r, a + gap / 2, a + span - gap / 2),
      color: d.color || COLORS[i % COLORS.length]
    };
    a += span;
    return s;
  });
  const h = hover >= 0 ? data[hover] : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'akp-donut ' + className,
    style: {
      width: size,
      height: size
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: '0 0 ' + size + ' ' + size
  }, /*#__PURE__*/React.createElement("circle", {
    cx: c,
    cy: c,
    r: r,
    fill: "none",
    stroke: "var(--surface-pressed)",
    strokeWidth: thickness
  }), segs.map((s, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: s.d,
    fill: "none",
    stroke: s.color,
    strokeWidth: thickness,
    strokeLinecap: "butt",
    opacity: hover < 0 || hover === i ? 1 : 0.35,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      cursor: 'pointer'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "akp-donut__center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-donut__value"
  }, h ? h.display ?? h.value : value), /*#__PURE__*/React.createElement("span", {
    className: "akp-donut__label"
  }, h ? h.label : label)));
}
function ChartLegend({
  items = [],
  columns = 2
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "akp-legend",
    style: {
      gridTemplateColumns: 'repeat(' + columns + ', minmax(0,1fr))'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "akp-legend__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-legend__key"
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-legend__sw",
    style: {
      background: it.color || COLORS[i % COLORS.length]
    }
  }), it.label), /*#__PURE__*/React.createElement("span", {
    className: "akp-legend__val"
  }, it.display ?? it.value))));
}
Object.assign(__ds_scope, { DonutChart, ChartLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/data/ListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ListItem({
  leading,
  icon,
  title,
  description,
  meta,
  trailing,
  selected = false,
  timeline = false,
  shape = 'pill',
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['akp-li', shape === 'rect' && 'akp-li--rect', onClick && 'akp-li--clickable', selected && 'akp-li--selected', timeline && 'akp-li--timeline', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    onClick: onClick,
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined
  }, rest), leading || icon ? /*#__PURE__*/React.createElement("span", {
    className: "akp-li__lead"
  }, leading || /*#__PURE__*/React.createElement("span", {
    className: "akp-li__ico"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }))) : null, /*#__PURE__*/React.createElement("span", {
    className: "akp-li__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-li__title"
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    className: "akp-li__desc"
  }, description) : null), meta ? /*#__PURE__*/React.createElement("span", {
    className: "akp-li__meta"
  }, meta) : null, trailing ? /*#__PURE__*/React.createElement("span", {
    className: "akp-li__trail",
    onClick: e => e.stopPropagation()
  }, trailing) : null);
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProgressBar({
  value = 0,
  max = 100,
  label,
  valueLabel,
  color,
  size = 'md',
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: 'akp-progress' + (size === 'lg' ? ' akp-progress--lg' : '') + ' ' + className
  }, rest), label || valueLabel ? /*#__PURE__*/React.createElement("div", {
    className: "akp-progress__row"
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("b", null, valueLabel ?? Math.round(pct) + '%')) : null, /*#__PURE__*/React.createElement("div", {
    className: "akp-progress__track",
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max
  }, /*#__PURE__*/React.createElement("div", {
    className: "akp-progress__fill",
    style: {
      width: pct + '%',
      background: color
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TINTS = ['var(--lime-200)', 'var(--emerald-300)', 'var(--lime-100)', '#B9D7FF', '#FFD9A8', '#E3D4FF'];
const initials = (n = '') => n.trim().split(/\s+/).slice(0, 2).map(p => p[0]).join('').toUpperCase();
function Avatar({
  name = '',
  src,
  size = 32,
  status,
  ring = false,
  className = '',
  style,
  ...rest
}) {
  const tint = TINTS[[...name].reduce((a, c) => a + c.charCodeAt(0), 0) % TINTS.length];
  const sc = {
    online: 'var(--emerald-400)',
    away: 'var(--amber-400)',
    busy: 'var(--red-400)',
    offline: 'var(--ink-500)'
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    className: 'akp-avatar' + (ring ? ' akp-avatar--ring' : '') + ' ' + className,
    style: {
      '--s': size + 'px',
      background: src ? 'var(--surface-card-raised)' : tint,
      ...style
    },
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name), status ? /*#__PURE__*/React.createElement("span", {
    className: "akp-avatar__status",
    style: {
      background: sc
    }
  }) : null);
}
function AvatarGroup({
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'akp-avatar-group ' + className
  }, children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'neutral',
  variant = 'soft',
  size = 'sm',
  dot = false,
  icon,
  className = '',
  children,
  ...rest
}) {
  const cls = ['akp-badge', 'akp-badge--' + tone, variant === 'solid' && 'akp-badge--solid', size === 'md' && 'akp-badge--md', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    className: "akp-badge__dot"
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  title,
  subtitle,
  actions,
  variant = 'default',
  flush = false,
  interactive = false,
  as = 'section',
  className = '',
  children,
  ...rest
}) {
  const cls = ['akp-card', variant !== 'default' && 'akp-card--' + variant, flush && 'akp-card--flush', interactive && 'akp-card--interactive', className].filter(Boolean).join(' ');
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), title || actions ? /*#__PURE__*/React.createElement("header", {
    className: "akp-card__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "akp-card__titles"
  }, title ? /*#__PURE__*/React.createElement("h3", {
    className: "akp-card__title"
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("span", {
    className: "akp-card__sub"
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    className: "akp-card__actions"
  }, actions) : null) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  label,
  value,
  delta,
  trend,
  comparison,
  icon,
  caption,
  variant = 'default',
  className = '',
  children,
  ...rest
}) {
  const dir = trend || (typeof delta === 'string' && delta.trim().startsWith('-') ? 'down' : 'up');
  const ti = dir === 'down' ? 'trending-down' : dir === 'flat' ? 'minus' : 'trending-up';
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    variant: variant,
    className: 'akp-stat ' + className
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "akp-stat__label"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "akp-stat__chip"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })) : null, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: -4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-stat__value"
  }, value), delta || comparison || caption ? /*#__PURE__*/React.createElement("div", {
    className: "akp-stat__foot"
  }, delta ? /*#__PURE__*/React.createElement("span", {
    className: 'akp-trend akp-trend--' + dir
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ti,
    size: 14
  }), delta) : null, comparison ? /*#__PURE__*/React.createElement("span", null, comparison) : null, caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, caption) : null) : null), children);
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  icon,
  selected = false,
  onRemove,
  onClick,
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const cls = ['akp-tag', selected && 'akp-tag--selected', size === 'sm' && 'akp-tag--sm', className].filter(Boolean).join(' ');
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 12 : 14
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("span", {
    role: "button",
    tabIndex: 0,
    "aria-label": "Remover",
    className: "akp-tag__x",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })) : null);
  return onClick ? /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    "aria-pressed": selected,
    onClick: onClick
  }, rest), inner) : /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), inner);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: 'info',
  success: 'circle-check',
  warning: 'triangle-alert',
  danger: 'circle-alert',
  accent: 'sparkles'
};
function Alert({
  tone = 'info',
  title,
  children,
  icon,
  action,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: tone === 'danger' ? 'alert' : 'status',
    className: 'akp-alert akp-alert--' + tone + ' ' + className
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ICONS[tone],
    size: 18,
    className: "akp-alert__ico"
  }), /*#__PURE__*/React.createElement("div", {
    className: "akp-alert__body"
  }, title ? /*#__PURE__*/React.createElement("span", {
    className: "akp-alert__title"
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    className: "akp-alert__desc"
  }, children) : null), action);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  success: ['circle-check', 'var(--success-soft)', 'var(--success)'],
  danger: ['circle-alert', 'var(--danger-soft)', 'var(--danger)'],
  warning: ['triangle-alert', 'var(--warning-soft)', 'var(--warning)'],
  info: ['info', 'var(--info-soft)', 'var(--info)'],
  accent: ['bell', 'var(--accent-soft)', 'var(--text-accent)']
};
function Toast({
  tone = 'success',
  title,
  description,
  action,
  onClose,
  className = '',
  style,
  ...rest
}) {
  const [ic, bg, fg] = T[tone] || T.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    className: 'akp-toast ' + className,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "akp-toast__ico",
    style: {
      background: bg,
      color: fg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "akp-toast__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-toast__title"
  }, title), description ? /*#__PURE__*/React.createElement("span", {
    className: "akp-toast__desc"
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    className: "akp-toast__act"
  }, action) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    onClick: onClose
  }) : null);
}
function ToastRegion({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "akp-toast-region",
    "aria-live": "polite"
  }, children);
}
Object.assign(__ds_scope, { Toast, ToastRegion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  kbd,
  placement = 'top',
  open,
  children,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: 'akp-tip-wrap ' + className
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: 'akp-tip akp-tip--' + placement + (open ? ' akp-tip--open' : '')
  }, content, kbd ? /*#__PURE__*/React.createElement("span", {
    className: "akp-kbd"
  }, kbd) : null));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  disabled,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: 'akp-check' + (disabled ? ' akp-check--disabled' : '') + ' ' + className
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "akp-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    strokeWidth: 3
  })), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "akp-check__txt"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "akp-check__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function DataTable({
  columns = [],
  rows = [],
  rowKey = 'id',
  selectable = false,
  selected,
  onSelectChange,
  stackOnMobile = true,
  compact = false,
  defaultSort,
  onRowClick,
  empty = 'Nenhum registro encontrado',
  className = ''
}) {
  const [sort, setSort] = React.useState(defaultSort || null);
  const [innerSel, setInnerSel] = React.useState([]);
  const sel = selected || innerSel;
  const setSel = v => {
    setInnerSel(v);
    onSelectChange && onSelectChange(v);
  };
  const sorted = React.useMemo(() => {
    if (!sort) return rows;
    const col = columns.find(c => c.key === sort.key);
    const get = col && col.sortValue ? col.sortValue : r => r[sort.key];
    return [...rows].sort((a, b) => {
      const x = get(a),
        y = get(b);
      return (x > y ? 1 : x < y ? -1 : 0) * (sort.dir === 'asc' ? 1 : -1);
    });
  }, [rows, sort, columns]);
  const toggleSort = k => setSort(s => s && s.key === k ? {
    key: k,
    dir: s.dir === 'asc' ? 'desc' : 'asc'
  } : {
    key: k,
    dir: 'desc'
  });
  const allOn = rows.length > 0 && sel.length === rows.length;
  const cls = ['akp-table', stackOnMobile && 'akp-table--stack', compact && 'akp-table--compact'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: 'akp-table-wrap ' + className
  }, /*#__PURE__*/React.createElement("table", {
    className: cls
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable ? /*#__PURE__*/React.createElement("th", {
    className: "is-check"
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    "aria-label": "Selecionar todos",
    checked: allOn,
    onChange: () => setSel(allOn ? [] : rows.map(r => r[rowKey]))
  })) : null, columns.map(c => {
    const on = sort && sort.key === c.key;
    return /*#__PURE__*/React.createElement("th", {
      key: c.key,
      className: c.align ? 'is-' + c.align : '',
      style: {
        width: c.width
      },
      "aria-sort": on ? sort.dir === 'asc' ? 'ascending' : 'descending' : undefined
    }, c.sortable ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggleSort(c.key)
    }, c.label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on ? sort.dir === 'asc' ? 'chevron-up' : 'chevron-down' : 'chevrons-up-down',
      size: 14
    })) : c.label);
  }))), /*#__PURE__*/React.createElement("tbody", null, sorted.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + (selectable ? 1 : 0),
    style: {
      textAlign: 'center',
      color: 'var(--text-tertiary)',
      height: 120
    }
  }, empty)) : sorted.map((r, ri) => {
    const k = r[rowKey] ?? ri,
      on = sel.includes(k);
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      className: on ? 'akp-table__row--sel' : '',
      onClick: onRowClick ? () => onRowClick(r) : undefined,
      style: onRowClick ? {
        cursor: 'pointer'
      } : undefined
    }, selectable ? /*#__PURE__*/React.createElement("td", {
      className: "is-check",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      "aria-label": "Selecionar linha",
      checked: on,
      onChange: () => setSel(on ? sel.filter(x => x !== k) : [...sel, k])
    })) : null, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      "data-label": typeof c.label === 'string' ? c.label : '',
      className: [c.align ? 'is-' + c.align : '', c.primary || !columns.some(x => x.primary) && ci === 0 ? 'is-primary' : ''].join(' ')
    }, c.render ? c.render(r) : r[c.key])));
  }))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  kbd,
  trailing,
  size = 'md',
  disabled,
  id,
  className = '',
  style,
  ...rest
}) {
  const fid = id || (label ? 'in-' + String(label).toLowerCase().replace(/\W+/g, '-') : undefined);
  const ctl = ['akp-control', size !== 'md' && 'akp-control--' + size, error && 'akp-control--error', disabled && 'akp-control--disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: 'akp-field ' + className,
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "akp-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: ctl
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    disabled: disabled,
    "aria-invalid": !!error || undefined
  }, rest)), kbd ? /*#__PURE__*/React.createElement("span", {
    className: "akp-kbd"
  }, kbd) : null, trailing), error || hint ? /*#__PURE__*/React.createElement("span", {
    className: 'akp-field__hint' + (error ? ' akp-field__hint--error' : '')
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  disabled,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: 'akp-check' + (disabled ? ' akp-check--disabled' : '') + ' ' + className
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "akp-check__box akp-check__box--radio"
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-check__dot"
  })), label || description ? /*#__PURE__*/React.createElement("span", {
    className: "akp-check__txt"
  }, label, description ? /*#__PURE__*/React.createElement("span", {
    className: "akp-check__desc"
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  block = false,
  className = '',
  ...rest
}) {
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const [inner, setInner] = React.useState(defaultValue ?? (norm[0] && norm[0].value));
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: 'akp-seg' + (block ? ' akp-seg--block' : '') + ' ' + className
  }, rest), norm.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "tab",
    "aria-selected": cur === o.value,
    className: 'akp-seg__btn' + (cur === o.value ? ' akp-seg__btn--on' : ''),
    onClick: () => {
      setInner(o.value);
      onChange && onChange(o.value);
    }
  }, o.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: o.icon,
    size: 14
  }) : null, o.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  icon,
  options = [],
  size = 'md',
  disabled,
  id,
  className = '',
  style,
  ...rest
}) {
  const fid = id || (label ? 'sel-' + String(label).toLowerCase().replace(/\W+/g, '-') : undefined);
  const ctl = ['akp-control', size !== 'md' && 'akp-control--' + size, error && 'akp-control--error', disabled && 'akp-control--disabled'].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", {
    className: 'akp-field ' + className,
    style: style
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "akp-field__label",
    htmlFor: fid
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: ctl
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    disabled: disabled
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    style: {
      pointerEvents: 'none'
    }
  })), error || hint ? /*#__PURE__*/React.createElement("span", {
    className: 'akp-field__hint' + (error ? ' akp-field__hint--error' : '')
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  disabled,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: 'akp-switch' + (disabled ? ' akp-switch--disabled' : '') + ' ' + className
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "akp-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-switch__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BottomNav({
  items = [],
  value,
  onChange,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: 'akp-bottomnav ' + className,
    style: style
  }, rest), items.map(it => {
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      className: 'akp-bottomnav__item' + (on ? ' akp-bottomnav__item--on' : ''),
      "aria-current": on ? 'page' : undefined,
      onClick: () => onChange && onChange(it.value)
    }, /*#__PURE__*/React.createElement("span", {
      className: "akp-bottomnav__pill"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20
    }), it.badge ? /*#__PURE__*/React.createElement("span", {
      className: "akp-bottomnav__badge"
    }, it.badge) : null), it.label);
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    className: 'akp-crumbs ' + className
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "akp-crumbs__cur",
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: it.onClick
    }, it.label), !last ? /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "/") : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function NavItem({
  icon,
  label,
  active = false,
  badge,
  collapsed = false,
  expandable = false,
  href,
  onClick,
  className = '',
  ...rest
}) {
  const cls = ['akp-nav', active && 'akp-nav--active', collapsed && 'akp-nav--collapsed', className].filter(Boolean).join(' ');
  const T = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(T, _extends({
    className: cls,
    href: href,
    type: href ? undefined : 'button',
    onClick: onClick,
    "aria-current": active ? 'page' : undefined,
    title: collapsed ? label : undefined
  }, rest), expandable ? /*#__PURE__*/React.createElement("span", {
    className: "akp-nav__chev"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 14
  })) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }) : null, /*#__PURE__*/React.createElement("span", {
    className: "akp-nav__label"
  }, label), badge != null ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: active ? 'neutral' : 'accent',
    variant: active ? 'solid' : 'soft'
  }, badge) : null);
}
function NavSection({
  label,
  children,
  collapsed = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && !collapsed ? /*#__PURE__*/React.createElement("div", {
    className: "akp-nav-section"
  }, label) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), children);
}
Object.assign(__ds_scope, { NavItem, NavSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function range(page, total) {
  if (total <= 7) return Array.from({
    length: total
  }, (_, i) => i + 1);
  const out = [1];
  const s = Math.max(2, page - 1),
    e = Math.min(total - 1, page + 1);
  if (s > 2) out.push('…');
  for (let i = s; i <= e; i++) out.push(i);
  if (e < total - 1) out.push('…');
  out.push(total);
  return out;
}
function Pagination({
  page = 1,
  totalPages = 1,
  onChange,
  info,
  compact = false,
  className = ''
}) {
  const go = p => onChange && onChange(Math.max(1, Math.min(totalPages, p)));
  return /*#__PURE__*/React.createElement("nav", {
    className: 'akp-pager ' + className,
    "aria-label": "Pagina\xE7\xE3o"
  }, info ? /*#__PURE__*/React.createElement("span", {
    className: "akp-pager__info"
  }, info) : null, /*#__PURE__*/React.createElement("button", {
    className: "akp-pager__btn",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    "aria-label": "Anterior"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 16
  })), compact ? /*#__PURE__*/React.createElement("span", {
    className: "akp-pager__gap"
  }, page, " / ", totalPages) : range(page, totalPages).map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 'g' + i,
    className: "akp-pager__gap"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    className: 'akp-pager__btn' + (p === page ? ' akp-pager__btn--on' : ''),
    "aria-current": p === page ? 'page' : undefined,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    className: "akp-pager__btn",
    disabled: page >= totalPages,
    onClick: () => go(page + 1),
    "aria-label": "Pr\xF3xima"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 16
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = '',
  ...rest
}) {
  const norm = items.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const [inner, setInner] = React.useState(defaultValue ?? (norm[0] && norm[0].value));
  const cur = value !== undefined ? value : inner;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: 'akp-tabs ' + className
  }, rest), norm.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    type: "button",
    "aria-selected": cur === t.value,
    className: 'akp-tab' + (cur === t.value ? ' akp-tab--on' : ''),
    onClick: () => {
      setInner(t.value);
      onChange && onChange(t.value);
    }
  }, t.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16
  }) : null, t.label, t.count != null ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: cur === t.value ? 'accent' : 'neutral'
  }, t.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  onClose,
  title,
  description,
  footer,
  width = 480,
  contained = false,
  children,
  className = ''
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: 'akp-scrim' + (contained ? ' akp-scrim--contained' : ''),
    onMouseDown: e => e.target === e.currentTarget && onClose && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    className: 'akp-dialog ' + className,
    style: {
      '--w': width + 'px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "akp-dialog__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "akp-dialog__titles"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "akp-dialog__title"
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    className: "akp-dialog__desc"
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    onClick: onClose
  }) : null), children ? /*#__PURE__*/React.createElement("div", {
    className: "akp-dialog__body"
  }, children) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  }), footer ? /*#__PURE__*/React.createElement("div", {
    className: "akp-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Menu.jsx
try { (() => {
function Menu({
  trigger,
  items = [],
  align = 'end',
  open: openProp,
  onOpenChange,
  className = ''
}) {
  const [inner, setInner] = React.useState(false);
  const open = openProp !== undefined ? openProp : inner;
  const set = v => {
    setInner(v);
    onOpenChange && onOpenChange(v);
  };
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) set(false);
    };
    const k = e => e.key === 'Escape' && set(false);
    document.addEventListener('mousedown', h);
    window.addEventListener('keydown', k);
    return () => {
      document.removeEventListener('mousedown', h);
      window.removeEventListener('keydown', k);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: 'akp-menu-wrap ' + className
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => set(!open),
    "aria-haspopup": "menu",
    "aria-expanded": open,
    style: {
      display: 'inline-flex'
    }
  }, trigger), open ? /*#__PURE__*/React.createElement("div", {
    role: "menu",
    className: 'akp-menu akp-menu--' + align
  }, items.map((it, i) => {
    if (it === '-' || it.separator) return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "akp-menu__sep"
    });
    if (it.heading) return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "akp-menu__label"
    }, it.heading);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "menuitem",
      type: "button",
      className: 'akp-menu__item' + (it.danger ? ' akp-menu__item--danger' : '') + (it.checked ? ' akp-menu__item--on' : ''),
      onClick: () => {
        it.onSelect && it.onSelect();
        set(false);
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }) : null, it.label, it.checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16,
      style: {
        marginLeft: 'auto',
        color: 'var(--text-accent)'
      }
    }) : it.hint ? /*#__PURE__*/React.createElement("span", {
      className: "akp-menu__hint"
    }, it.hint) : null);
  })) : null);
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Menu.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Sheet.jsx
try { (() => {
function Sheet({
  open = true,
  onClose,
  side = 'right',
  title,
  width,
  contained = false,
  children,
  className = ''
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: 'akp-sheet-scrim' + (contained ? ' akp-sheet-scrim--contained' : ''),
    onMouseDown: e => e.target === e.currentTarget && onClose && onClose()
  }, /*#__PURE__*/React.createElement("aside", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined,
    className: 'akp-sheet akp-sheet--' + side + ' ' + className,
    style: width ? {
      '--w': width + 'px'
    } : undefined
  }, side === 'bottom' ? /*#__PURE__*/React.createElement("span", {
    className: "akp-sheet__grab"
  }) : null, title || onClose ? /*#__PURE__*/React.createElement("div", {
    className: "akp-sheet__head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "akp-sheet__title"
  }, title), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    size: "sm",
    onClick: onClose
  }) : null) : null, /*#__PURE__*/React.createElement("div", {
    className: "akp-sheet__body"
  }, children)));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Sheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Customers.jsx
try { (() => {
function Customers({
  bp
}) {
  const {
    Card,
    DataTable,
    SegmentedControl,
    Input,
    Button,
    Avatar,
    Badge,
    IconButton,
    Menu,
    Icon
  } = window.AKP3DDesignSystem_42d958;
  const D = window.AKP_DATA,
    F = window.AKP_FMT;
  const mobile = bp === 'mobile';
  const [view, setView] = React.useState('grid');
  const [q, setQ] = React.useState('');
  const rows = D.customers.filter(c => !q || (c.name + c.email + c.city).toLowerCase().includes(q.toLowerCase()));
  const cols = bp === 'wide' ? 3 : bp === 'mobile' ? 1 : 2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 12 : 16
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    bp: bp,
    title: "Clientes",
    subtitle: mobile ? null : '1.284 clientes ativos',
    actions: /*#__PURE__*/React.createElement(Button, {
      icon: "user-plus",
      size: mobile ? 'sm' : 'md'
    }, "Adicionar cliente")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar clientes",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      flex: '1 1 240px',
      maxWidth: mobile ? 'none' : 360
    }
  }), /*#__PURE__*/React.createElement(SegmentedControl, {
    value: view,
    onChange: setView,
    options: [{
      value: 'grid',
      label: 'Grade',
      icon: 'layout-grid'
    }, {
      value: 'list',
      label: 'Lista',
      icon: 'list'
    }],
    style: {
      marginLeft: 'auto'
    }
  })), view === 'grid' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + cols + ',minmax(0,1fr))',
      gap: mobile ? 12 : 16
    }
  }, rows.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 15
    }
  }, c.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, c.email)), /*#__PURE__*/React.createElement(Menu, {
    trigger: /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-vertical",
      label: "Mais",
      size: "sm"
    }),
    items: [{
      icon: 'mail',
      label: 'Enviar e-mail'
    }, {
      icon: 'pencil',
      label: 'Editar'
    }, '-', {
      icon: 'archive',
      label: 'Arquivar',
      danger: true
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), c.city), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr auto',
      gap: 12,
      alignItems: 'end',
      paddingTop: 14,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, "Neg\xF3cios"), /*#__PURE__*/React.createElement("span", {
    className: "akp-num",
    style: {
      fontWeight: 500
    }
  }, F.int(c.deals))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, "Valor total"), /*#__PURE__*/React.createElement("span", {
    className: "akp-num",
    style: {
      fontWeight: 500
    }
  }, F.brl(c.total))), /*#__PURE__*/React.createElement(Badge, {
    tone: F.tone[c.status],
    dot: true
  }, c.status))))) : /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement(DataTable, {
    rowKey: "id",
    rows: rows,
    columns: [{
      key: 'name',
      label: 'Nome',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.name
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r.name), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-caption)',
          color: 'var(--text-tertiary)'
        }
      }, r.email)))
    }, {
      key: 'city',
      label: 'Cidade',
      sortable: true
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: F.tone[r.status],
        dot: true
      }, r.status)
    }, {
      key: 'deals',
      label: 'Negócios',
      align: 'right',
      sortable: true,
      render: r => F.int(r.deals)
    }, {
      key: 'total',
      label: 'Valor total',
      align: 'right',
      sortable: true,
      render: r => F.brl(r.total)
    }]
  })));
}
window.Customers = Customers;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Customers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Login.jsx
try { (() => {
function Login({
  bp,
  onLogin
}) {
  const {
    Input,
    Button,
    Checkbox,
    Icon
  } = window.AKP3DDesignSystem_42d958;
  const mobile = bp === 'mobile' || bp === 'tablet';
  const [loading, setLoading] = React.useState(false);
  const [err, setErr] = React.useState('');
  const submit = e => {
    e.preventDefault();
    const em = e.target.email.value;
    if (!em.includes('@')) {
      setErr('Informe um e-mail válido');
      return;
    }
    setErr('');
    setLoading(true);
    setTimeout(onLogin, 800);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)',
      background: 'var(--bg-app)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: mobile ? '24px 20px' : '40px 56px'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      margin: 'auto 0',
      width: '100%',
      maxWidth: 380,
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '600 28px/1.2 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, "Acesse o painel"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-secondary)'
    }
  }, "Entre com a conta da sua empresa.")), /*#__PURE__*/React.createElement(Input, {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "nome@empresa.com.br",
    defaultValue: "guy@akp3d.com.br",
    error: err,
    size: "lg"
  }), /*#__PURE__*/React.createElement(Input, {
    name: "password",
    label: "Senha",
    type: "password",
    defaultValue: "senha1234",
    size: "lg",
    trailing: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        font: 'var(--type-caption)',
        whiteSpace: 'nowrap'
      }
    }, "Esqueci a senha")
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Manter conectado",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    block: true,
    loading: loading
  }, loading ? 'Entrando' : 'Entrar'), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)',
      textAlign: 'center'
    }
  }, "Problemas para entrar? ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Fale com o suporte"))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, "\xA9 2026 AKP3D sistemas")), mobile ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 16,
      borderRadius: 'var(--radius-xl)',
      background: 'var(--promo-gradient)',
      padding: 48,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 16,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chart-column",
    size: 22
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '600 36px/1.15 var(--font-sans)',
      letterSpacing: '-0.02em',
      maxWidth: 440,
      textWrap: 'pretty'
    }
  }, "Receita, pedidos e clientes em um s\xF3 lugar."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 16px/1.5 var(--font-sans)',
      color: 'rgba(255,255,255,.78)',
      maxWidth: 420
    }
  }, "Acompanhe a opera\xE7\xE3o em tempo real, no computador ou no celular.")));
}
window.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Orders.jsx
try { (() => {
function OrderDetail({
  order,
  onClose,
  toast
}) {
  const {
    Sheet,
    ListItem,
    Avatar,
    Badge,
    Button,
    Icon
  } = window.AKP3DDesignSystem_42d958;
  const F = window.AKP_FMT;
  if (!order) return null;
  const lines = [{
    name: 'Kit sensor de presença',
    qty: 1,
    price: order.total * 0.55
  }, {
    name: 'Módulo de controle',
    qty: 1,
    price: order.total * 0.3
  }, {
    name: 'Frete',
    qty: 1,
    price: order.total * 0.15
  }];
  return /*#__PURE__*/React.createElement(Sheet, {
    side: "right",
    width: 400,
    title: 'Pedido #' + order.id,
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: F.tone[order.status],
    dot: true,
    size: "md"
  }, order.status), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, "Criado em ", order.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      padding: '8px 16px'
    }
  }, /*#__PURE__*/React.createElement(ListItem, {
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: order.customer,
      size: 40
    }),
    title: order.customer,
    description: "Cliente desde 2023"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-overline)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, "Itens"), lines.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.name,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      font: 'var(--type-body-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-tertiary)'
    }
  }, "\xD7 ", l.qty)), /*#__PURE__*/React.createElement("span", {
    className: "akp-num"
  }, F.brl(l.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)',
      font: '600 16px var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "akp-num"
  }, F.brl(order.total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      font: 'var(--type-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 16
  }), " Entrega prevista em 3 dias \xFAteis"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    icon: "send",
    onClick: () => {
      onClose();
      toast('Pedido #' + order.id + ' enviado', 'O cliente foi notificado por e-mail.');
    }
  }, "Marcar como enviado"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    variant: "secondary",
    icon: "printer"
  }, "Imprimir nota"))));
}
function Orders({
  bp,
  toast
}) {
  const {
    Card,
    DataTable,
    Tabs,
    Input,
    Select,
    Button,
    Badge,
    Avatar,
    Pagination,
    Dialog,
    Alert,
    Tag
  } = window.AKP3DDesignSystem_42d958;
  const D = window.AKP_DATA,
    F = window.AKP_FMT;
  const mobile = bp === 'mobile';
  const [tab, setTab] = React.useState('all');
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(null);
  const [confirm, setConfirm] = React.useState(false);
  const [rows, setRows] = React.useState(D.orders);
  const map = {
    all: null,
    pending: 'Pendente',
    paid: 'Pago',
    shipped: 'Enviado',
    canceled: 'Cancelado'
  };
  const vis = rows.filter(o => (!map[tab] || o.status === map[tab]) && (!q || (o.customer + o.id).toLowerCase().includes(q.toLowerCase())));
  const count = s => rows.filter(o => o.status === s).length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 12 : 16
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    bp: bp,
    title: "Pedidos",
    subtitle: mobile ? null : rows.length + ' pedidos nos últimos 30 dias',
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      icon: "download",
      size: mobile ? 'sm' : 'md'
    }, "Exportar"), /*#__PURE__*/React.createElement(Button, {
      icon: "plus",
      size: mobile ? 'sm' : 'md'
    }, "Novo pedido"))
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: v => {
      setTab(v);
      setSel([]);
    },
    items: [{
      value: 'all',
      label: 'Todos',
      count: rows.length
    }, {
      value: 'pending',
      label: 'Pendentes',
      count: count('Pendente')
    }, {
      value: 'paid',
      label: 'Pagos'
    }, {
      value: 'shipped',
      label: 'Enviados'
    }, {
      value: 'canceled',
      label: 'Cancelados'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar por cliente ou n\xBA",
    value: q,
    onChange: e => setQ(e.target.value),
    style: {
      flex: mobile ? '1 1 100%' : '0 1 300px'
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ['Últimos 30 dias', 'Últimos 7 dias', 'Hoje'],
    style: {
      width: mobile ? 'calc(50% - 4px)' : 170
    }
  }), /*#__PURE__*/React.createElement(Select, {
    options: ['Todos os canais', 'Loja online', 'Marketplace', 'Balcão'],
    style: {
      width: mobile ? 'calc(50% - 4px)' : 170
    }
  }), mobile ? null : /*#__PURE__*/React.createElement(Tag, {
    onRemove: () => {}
  }, "Valor > R$ 100")), sel.length ? /*#__PURE__*/React.createElement(Alert, {
    tone: "accent",
    icon: "square-check",
    title: sel.length + (sel.length > 1 ? ' pedidos selecionados' : ' pedido selecionado'),
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => setSel([])
    }, "Limpar"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "danger",
      icon: "trash-2",
      onClick: () => setConfirm(true)
    }, "Excluir"))
  }) : null, /*#__PURE__*/React.createElement(Card, {
    flush: true
  }, /*#__PURE__*/React.createElement(DataTable, {
    selectable: true,
    rowKey: "id",
    rows: vis,
    selected: sel,
    onSelectChange: setSel,
    onRowClick: setOpen,
    defaultSort: {
      key: 'id',
      dir: 'desc'
    },
    columns: [{
      key: 'id',
      label: 'Pedido',
      sortable: true,
      primary: true,
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.customer
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'left'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r.customer), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-caption)',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-tertiary)'
        }
      }, "#", r.id)))
    }, {
      key: 'date',
      label: 'Data',
      sortable: true
    }, {
      key: 'status',
      label: 'Status',
      render: r => /*#__PURE__*/React.createElement(Badge, {
        tone: F.tone[r.status],
        dot: true
      }, r.status)
    }, {
      key: 'items',
      label: 'Itens',
      align: 'right',
      sortable: true
    }, {
      key: 'total',
      label: 'Total',
      align: 'right',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, F.brl(r.total))
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: mobile ? '12px 16px' : '12px 20px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    totalPages: 13,
    onChange: setPage,
    compact: mobile,
    info: mobile ? null : '1–' + vis.length + ' de 128'
  }))), /*#__PURE__*/React.createElement(OrderDetail, {
    order: open,
    onClose: () => setOpen(null),
    toast: toast
  }), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    onClose: () => setConfirm(false),
    title: 'Excluir ' + sel.length + (sel.length > 1 ? ' pedidos?' : ' pedido?'),
    description: "Os pedidos ser\xE3o removidos do painel e dos relat\xF3rios. Esta a\xE7\xE3o n\xE3o pode ser desfeita.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(false)
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      icon: "trash-2",
      onClick: () => {
        setRows(rows.filter(r => !sel.includes(r.id)));
        toast(sel.length + ' pedido(s) excluído(s)', null, 'danger');
        setSel([]);
        setConfirm(false);
      }
    }, "Excluir"))
  }));
}
window.Orders = Orders;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Orders.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Overview.jsx
try { (() => {
function Overview({
  bp,
  onNav,
  toast
}) {
  const {
    Card,
    StatCard,
    DonutChart,
    ChartLegend,
    AreaChart,
    DataTable,
    Avatar,
    IconButton,
    Menu,
    Select,
    Badge,
    Tag,
    Button,
    ProgressBar,
    Icon
  } = window.AKP3DDesignSystem_42d958;
  const D = window.AKP_DATA,
    F = window.AKP_FMT;
  const mobile = bp === 'mobile',
    narrow = bp === 'mobile' || bp === 'tablet';
  const more = name => /*#__PURE__*/React.createElement(Menu, {
    trigger: /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-vertical",
      label: 'Opções de ' + name,
      size: "sm"
    }),
    items: [{
      icon: 'download',
      label: 'Exportar CSV',
      onSelect: () => toast('Exportação iniciada', 'Você receberá o arquivo por e-mail.')
    }, {
      icon: 'refresh-cw',
      label: 'Atualizar dados',
      hint: 'R'
    }, {
      icon: 'maximize-2',
      label: 'Expandir'
    }]
  });
  const gap = mobile ? 12 : 16;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, mobile ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, "Ol\xE1, Guy \u2014 aqui est\xE1 o resumo de hoje.") : /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-page-title)',
      letterSpacing: '-0.01em'
    }
  }, "Vis\xE3o geral"), /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['Hoje', 'Últimos 7 dias', 'Este mês', 'Este trimestre'],
    style: {
      width: 150,
      flex: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: mobile ? {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '78%',
      gap,
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollPaddingLeft: 16,
      scrollbarWidth: 'none',
      margin: '0 -16px',
      padding: '0 16px'
    } : {
      display: 'grid',
      gridTemplateColumns: narrow ? 'repeat(2,minmax(0,1fr))' : 'repeat(4,minmax(0,1fr))',
      gap
    }
  }, D.kpis.map(k => /*#__PURE__*/React.createElement(StatCard, {
    key: k.label,
    label: k.label,
    value: k.value,
    delta: k.delta,
    comparison: k.comparison,
    caption: k.caption,
    style: {
      scrollSnapAlign: 'start'
    }
  }, k.progress ? /*#__PURE__*/React.createElement(ProgressBar, {
    value: k.progress
  }) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? 'minmax(0,1fr)' : 'minmax(0,1.55fr) minmax(0,1fr)',
      gap
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Vis\xE3o de vendas",
    actions: more('vendas')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: mobile ? 20 : 32,
      alignItems: 'center',
      flexDirection: mobile ? 'column' : 'row',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    data: D.categories,
    size: mobile ? 180 : 168,
    thickness: 22,
    value: "102 mil",
    label: "Visitas/semana"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      flex: 1,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'var(--accent-soft)',
      color: 'var(--text-accent)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "dollar-sign",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, "Total em vendas"), /*#__PURE__*/React.createElement("span", {
    className: "akp-num",
    style: {
      font: '600 20px/1.1 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, "R$ 71.020"))), /*#__PURE__*/React.createElement(ChartLegend, {
    items: D.categories
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      gap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
      gap
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    variant: "raised",
    icon: "users",
    label: "Novos clientes",
    value: "862",
    delta: "-8%",
    comparison: "semana"
  }), /*#__PURE__*/React.createElement(StatCard, {
    variant: "raised",
    icon: "chart-column",
    label: "Lucro total",
    value: "R$ 25,6 mil",
    delta: "42%",
    comparison: "semana"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Lucro acumulado",
    subtitle: "1\u201314 fev 2026",
    actions: /*#__PURE__*/React.createElement(Badge, {
      tone: "accent",
      icon: "trending-up"
    }, "+42%")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      marginTop: -6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-num",
    style: {
      font: '600 22px/1.1 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, "R$ 136.755,77")), /*#__PURE__*/React.createElement(AreaChart, {
    data: D.profit,
    labels: D.profitLabels,
    height: 110,
    showAxis: false,
    formatValue: v => 'R$ ' + v + ' mil'
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: narrow ? 'minmax(0,1fr)' : 'minmax(0,1.55fr) minmax(0,1fr)',
      gap
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Clientes",
    flush: true,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      iconRight: "arrow-right",
      onClick: () => onNav('customers')
    }, "Ver todos"), more('clientes'))
  }, /*#__PURE__*/React.createElement(DataTable, {
    rowKey: "id",
    defaultSort: {
      key: 'total',
      dir: 'desc'
    },
    rows: D.customers.slice(0, 4),
    columns: [{
      key: 'name',
      label: 'Nome',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: r.name
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500
        }
      }, r.name), /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-caption)',
          color: 'var(--text-tertiary)'
        }
      }, r.email)))
    }, {
      key: 'deals',
      label: 'Negócios',
      align: 'right',
      sortable: true,
      render: r => F.int(r.deals)
    }, {
      key: 'total',
      label: 'Valor total',
      align: 'right',
      sortable: true,
      render: r => F.brl(r.total)
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "promo",
    style: {
      justifyContent: 'space-between',
      minHeight: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.08)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.18)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--lime-300)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap",
    size: 14
  })), /*#__PURE__*/React.createElement(Tag, {
    size: "sm",
    style: {
      color: '#fff',
      background: 'rgba(255,255,255,.06)',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.18)'
    }
  }, "Plano Premium"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "akp-num",
    style: {
      font: '600 52px/1 var(--font-sans)',
      letterSpacing: '-0.03em'
    }
  }, "R$ 30"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: 'rgba(255,255,255,.72)',
      borderLeft: '1px solid rgba(255,255,255,.24)',
      paddingLeft: 14
    }
  }, "por m\xEAs", /*#__PURE__*/React.createElement("br", null), "por usu\xE1rio")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 15px/1.5 var(--font-sans)',
      color: 'rgba(255,255,255,.88)',
      textWrap: 'pretty'
    }
  }, "Melhore a gest\xE3o da sua opera\xE7\xE3o: acompanhe lucros, preju\xEDzos e pedidos em tempo real."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    block: true,
    onClick: () => toast('Plano Premium ativado', 'Os novos recursos já estão disponíveis.')
  }, "Assinar agora"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "star",
    label: "Favoritar",
    size: "lg",
    style: {
      background: 'rgba(184,254,87,.16)',
      color: 'var(--lime-300)'
    }
  })))));
}
window.Overview = Overview;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Settings.jsx
try { (() => {
function SettingsRow({
  title,
  desc,
  children,
  mobile
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: mobile ? 'flex-start' : 'center',
      justifyContent: 'space-between',
      padding: '16px 0',
      borderTop: '1px solid var(--border-subtle)',
      flexDirection: mobile ? 'column' : 'row'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      fontSize: 14
    }
  }, title), desc ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-tertiary)'
    }
  }, desc) : null), children);
}
function Settings({
  bp,
  toast,
  dark,
  onTheme
}) {
  const {
    Card,
    Tabs,
    Input,
    Select,
    Switch,
    Checkbox,
    Radio,
    Button,
    Avatar,
    Alert
  } = window.AKP3DDesignSystem_42d958;
  const u = window.AKP_DATA.user;
  const mobile = bp === 'mobile';
  const [tab, setTab] = React.useState('profile');
  const [saving, setSaving] = React.useState(false);
  const save = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast('Alterações salvas', 'Seu perfil foi atualizado.');
    }, 900);
  };
  const grid2 = {
    display: 'grid',
    gridTemplateColumns: mobile ? 'minmax(0,1fr)' : 'repeat(2,minmax(0,1fr))',
    gap: 16
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: mobile ? 12 : 16,
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    bp: bp,
    title: "Configura\xE7\xF5es",
    subtitle: mobile ? null : 'Gerencie seu perfil, alertas e segurança'
  }), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'profile',
      label: 'Perfil',
      icon: 'user'
    }, {
      value: 'notif',
      label: 'Notificações',
      icon: 'bell'
    }, {
      value: 'security',
      label: 'Segurança',
      icon: 'shield'
    }]
  }), tab === 'profile' ? /*#__PURE__*/React.createElement(Card, {
    title: "Dados pessoais",
    subtitle: "Vis\xEDvel para a sua equipe"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: u.name,
    size: 64,
    ring: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "upload"
  }, "Enviar foto"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Remover"))), /*#__PURE__*/React.createElement("div", {
    style: grid2
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nome completo",
    defaultValue: u.name
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    type: "email",
    defaultValue: u.email,
    hint: "Usado para login e alertas"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefone",
    defaultValue: "(11) 98765-4321"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Cargo",
    options: ['Administrador', 'Gerente', 'Analista', 'Leitura'],
    defaultValue: u.role
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(SettingsRow, {
    mobile: mobile,
    title: "Tema escuro",
    desc: "Recomendado para uso prolongado"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: dark,
    onChange: onTheme,
    "aria-label": "Tema escuro"
  })), /*#__PURE__*/React.createElement(SettingsRow, {
    mobile: mobile,
    title: "Moeda padr\xE3o",
    desc: "Usada em relat\xF3rios e KPIs"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "cur",
    label: "BRL",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "cur",
    label: "USD"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      flexDirection: mobile ? 'column-reverse' : 'row'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: mobile ? 'lg' : 'md'
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    loading: saving,
    onClick: save,
    size: mobile ? 'lg' : 'md'
  }, saving ? 'Salvando' : 'Salvar alterações'))) : tab === 'notif' ? /*#__PURE__*/React.createElement(Card, {
    title: "Alertas",
    subtitle: "Escolha o que chega at\xE9 voc\xEA"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(SettingsRow, {
    mobile: mobile,
    title: "Novos pedidos",
    desc: "Aviso a cada pedido confirmado"
  }, /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    "aria-label": "Novos pedidos"
  })), /*#__PURE__*/React.createElement(SettingsRow, {
    mobile: mobile,
    title: "Estoque baixo",
    desc: "Quando um produto ficar abaixo de 10 unidades"
  }, /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    "aria-label": "Estoque baixo"
  })), /*#__PURE__*/React.createElement(SettingsRow, {
    mobile: mobile,
    title: "Mensagens de clientes"
  }, /*#__PURE__*/React.createElement(Switch, {
    "aria-label": "Mensagens"
  })), /*#__PURE__*/React.createElement(SettingsRow, {
    mobile: mobile,
    title: "Canais"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "E-mail",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Push",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "WhatsApp"
  }))))) : /*#__PURE__*/React.createElement(Card, {
    title: "Seguran\xE7a",
    subtitle: "\xDAltimo acesso: hoje, 09:14 \xB7 S\xE3o Paulo"
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Autentica\xE7\xE3o em duas etapas desativada"
  }, "Ative para proteger o acesso ao painel administrativo."), /*#__PURE__*/React.createElement("div", {
    style: grid2
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Senha atual",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Nova senha",
    type: "password",
    placeholder: "M\xEDnimo de 8 caracteres"
  })), /*#__PURE__*/React.createElement(SettingsRow, {
    mobile: mobile,
    title: "Autentica\xE7\xE3o em duas etapas",
    desc: "C\xF3digo por aplicativo autenticador"
  }, /*#__PURE__*/React.createElement(Switch, {
    "aria-label": "2FA"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => toast('Senha atualizada', null),
    size: mobile ? 'lg' : 'md',
    block: mobile
  }, "Atualizar senha"))));
}
window.Settings = Settings;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Settings.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/Shell.jsx
try { (() => {
const shellNS = window.AKP3DDesignSystem_42d958;
function useBreakpoint() {
  const get = () => {
    if (window.__AKP_BP) return window.__AKP_BP;
    const w = window.innerWidth;
    return w < 640 ? 'mobile' : w < 1024 ? 'tablet' : w < 1280 ? 'desktop' : 'wide';
  };
  const [bp, setBp] = React.useState(get);
  React.useEffect(() => {
    const on = () => setBp(get());
    window.addEventListener('resize', on);
    return () => window.removeEventListener('resize', on);
  }, []);
  return bp;
}
const NAV = [{
  section: 'Painéis',
  items: [{
    id: 'overview',
    icon: 'layout-dashboard',
    label: 'Visão geral'
  }, {
    id: 'orders',
    icon: 'shopping-bag',
    label: 'Pedidos',
    badge: 4
  }, {
    id: 'analytics',
    icon: 'chart-column',
    label: 'Análises'
  }, {
    id: 'customers',
    icon: 'users',
    label: 'Clientes'
  }]
}, {
  section: 'Ajustes',
  items: [{
    id: 'messages',
    icon: 'message-square',
    label: 'Mensagens',
    badge: 5
  }, {
    id: 'reviews',
    icon: 'star',
    label: 'Avaliações'
  }, {
    id: 'settings',
    icon: 'settings',
    label: 'Configurações'
  }, {
    id: 'help',
    icon: 'circle-help',
    label: 'Central de ajuda'
  }]
}];
const TITLES = {
  overview: 'Visão geral',
  orders: 'Pedidos',
  analytics: 'Análises',
  customers: 'Clientes',
  messages: 'Mensagens',
  reviews: 'Avaliações',
  settings: 'Configurações',
  help: 'Central de ajuda'
};
function Wordmark({
  small
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 ${small ? 16 : 18}px/1 var(--font-sans)`,
      letterSpacing: '-0.03em'
    }
  }, "AKP3D"), small ? null : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "sistemas"));
}
function UserMenu({
  onLogout,
  compact
}) {
  const {
    Menu,
    Avatar,
    Icon
  } = shellNS;
  const u = window.AKP_DATA.user;
  return /*#__PURE__*/React.createElement(Menu, {
    align: "start",
    trigger: /*#__PURE__*/React.createElement("button", {
      type: "button",
      style: {
        all: 'unset',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '4px 6px',
        borderRadius: 999
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: u.name,
      size: compact ? 36 : 32,
      ring: true
    }), compact ? null : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-label)',
        flex: 1
      }
    }, u.name), /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 14,
      color: "var(--text-tertiary)"
    }))),
    items: [{
      heading: u.email
    }, {
      icon: 'user',
      label: 'Meu perfil'
    }, {
      icon: 'settings',
      label: 'Configurações'
    }, '-', {
      icon: 'log-out',
      label: 'Sair',
      danger: true,
      onSelect: onLogout
    }]
  });
}
function SidebarNav({
  screen,
  onNav,
  collapsed
}) {
  const {
    NavItem,
    NavSection
  } = shellNS;
  return NAV.map(g => /*#__PURE__*/React.createElement(NavSection, {
    key: g.section,
    label: g.section,
    collapsed: collapsed
  }, g.items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    icon: it.icon,
    label: it.label,
    badge: it.badge,
    collapsed: collapsed,
    active: screen === it.id,
    onClick: () => onNav(it.id)
  }))));
}
function Sidebar({
  screen,
  onNav,
  collapsed,
  onLogout
}) {
  const {
    Input,
    IconButton
  } = shellNS;
  return /*#__PURE__*/React.createElement("aside", {
    className: "akp-scroll",
    style: {
      width: collapsed ? 'var(--sidebar-w-collapsed)' : 'var(--sidebar-w)',
      flex: 'none',
      background: 'var(--surface-sidebar)',
      display: 'flex',
      flexDirection: 'column',
      padding: collapsed ? '20px 14px' : '20px 16px',
      gap: 16,
      overflowY: 'auto',
      overflowX: 'hidden',
      alignItems: collapsed ? 'center' : 'stretch'
    }
  }, /*#__PURE__*/React.createElement(UserMenu, {
    onLogout: onLogout,
    compact: collapsed
  }), collapsed ? /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Buscar"
  }) : /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Buscar\u2026",
    kbd: "\u2318K",
    size: "sm"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: -12
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    screen: screen,
    onNav: onNav,
    collapsed: collapsed
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 16,
      display: 'flex',
      justifyContent: collapsed ? 'center' : 'flex-start',
      paddingLeft: collapsed ? 0 : 12
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    small: collapsed
  })));
}
function Topbar({
  screen,
  bp,
  onMenu,
  onBell,
  dark,
  onTheme
}) {
  const {
    IconButton,
    Breadcrumbs,
    Tooltip
  } = shellNS;
  const mobile = bp === 'mobile';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--topbar-h)',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: mobile ? '0 8px 0 12px' : '0 16px 0 24px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--bg-app)'
    }
  }, mobile ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "menu",
    label: "Abrir menu",
    onClick: onMenu
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-card-title)',
      flex: 1,
      letterSpacing: '-0.01em'
    }
  }, TITLES[screen]), /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Buscar"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifica\xE7\xF5es",
    dot: true,
    onClick: onBell
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
    icon: "layers",
    label: "Pain\xE9is",
    size: "sm"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "star",
    label: "Favoritar p\xE1gina",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Breadcrumbs, {
    items: [{
      label: 'Painéis'
    }, {
      label: TITLES[screen]
    }],
    style: {
      marginLeft: 8,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    content: dark ? 'Tema claro' : 'Tema escuro',
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: dark ? 'moon' : 'sun',
    label: "Alternar tema",
    onClick: onTheme
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Atualizar",
    kbd: "R",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "refresh-cw",
    label: "Atualizar"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Notifica\xE7\xF5es",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifica\xE7\xF5es",
    dot: true,
    onClick: onBell
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Idioma",
    placement: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "globe",
    label: "Idioma"
  }))));
}
function RailSection({
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingBottom: 20,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-card-title)',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, children));
}
function RailContent() {
  const {
    ListItem,
    Avatar,
    IconButton
  } = shellNS;
  const D = window.AKP_DATA;
  const [sel, setSel] = React.useState('Nataniel Donowan');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(RailSection, {
    title: "Notifica\xE7\xF5es"
  }, D.notifications.map(n => /*#__PURE__*/React.createElement(ListItem, {
    key: n.title,
    icon: n.icon,
    title: n.title,
    description: n.time
  }))), /*#__PURE__*/React.createElement(RailSection, {
    title: "Atividades"
  }, D.activities.map(a => /*#__PURE__*/React.createElement(ListItem, {
    key: a.title,
    timeline: true,
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: a.who,
      size: 24
    }),
    title: a.title,
    description: a.time
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--type-card-title)',
      letterSpacing: '-0.01em'
    }
  }, "Gerentes de conta"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, D.managers.map(m => /*#__PURE__*/React.createElement(ListItem, {
    key: m.name,
    selected: sel === m.name,
    onClick: () => setSel(m.name),
    leading: /*#__PURE__*/React.createElement(Avatar, {
      name: m.name,
      status: m.status
    }),
    title: m.name,
    trailing: sel === m.name ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "mail",
      label: "E-mail",
      size: "sm"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "phone",
      label: "Ligar",
      size: "sm"
    })) : /*#__PURE__*/React.createElement(IconButton, {
      icon: "more-horizontal",
      label: "Mais",
      size: "sm"
    })
  })))));
}
function RightRail() {
  return /*#__PURE__*/React.createElement("aside", {
    className: "akp-scroll",
    style: {
      width: 'var(--rail-w)',
      flex: 'none',
      background: 'var(--surface-sidebar)',
      borderLeft: '1px solid var(--border-subtle)',
      padding: '20px 20px 24px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(RailContent, null));
}
function PageHeader({
  title,
  subtitle,
  actions,
  bp
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: bp === 'mobile' ? 'flex-start' : 'center',
      gap: 12,
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, bp === 'mobile' && !subtitle ? null : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minWidth: 0
    }
  }, bp === 'mobile' ? null : /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--type-page-title)',
      letterSpacing: '-0.01em'
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-tertiary)'
    }
  }, subtitle) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, actions) : null);
}
Object.assign(window, {
  useBreakpoint,
  NAV,
  TITLES,
  Wordmark,
  Sidebar,
  SidebarNav,
  Topbar,
  RightRail,
  RailContent,
  PageHeader,
  UserMenu
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/data.js
try { (() => {
window.AKP_DATA = {
  user: {
    name: 'Guy Hawkins',
    email: 'guy@akp3d.com.br',
    role: 'Administrador'
  },
  kpis: [{
    label: 'Receita líquida',
    value: 'R$ 3.131.021',
    delta: '0,4%',
    comparison: 'vs mês anterior'
  }, {
    label: 'Receita recorrente',
    value: 'R$ 1.511.121',
    delta: '32%',
    comparison: 'vs trimestre anterior'
  }, {
    label: 'Meta trimestral',
    value: '71%',
    caption: 'Meta: R$ 1,1 mi',
    progress: 71
  }, {
    label: 'Novos pedidos',
    value: '18.221',
    delta: '11%',
    comparison: 'vs trimestre anterior'
  }],
  categories: [{
    label: 'Eletrônicos',
    value: 55640,
    display: 'R$ 55.640'
  }, {
    label: 'Móveis',
    value: 11420,
    display: 'R$ 11.420'
  }, {
    label: 'Vestuário',
    value: 1840,
    display: 'R$ 1.840'
  }, {
    label: 'Calçados',
    value: 2120,
    display: 'R$ 2.120'
  }],
  profit: [42, 48, 44, 61, 55, 70, 64, 88, 79, 96, 90, 118, 109, 136],
  profitLabels: ['1 fev', '2 fev', '3 fev', '4 fev', '5 fev', '6 fev', '7 fev', '8 fev', '9 fev', '10 fev', '11 fev', '12 fev', '13 fev', '14 fev'],
  customers: [{
    id: 1,
    name: 'Danny Liu',
    email: 'danny@gmail.com',
    city: 'São Paulo, SP',
    deals: 1023,
    total: 37431,
    status: 'Ativo'
  }, {
    id: 2,
    name: 'Bella Deviant',
    email: 'bella@gmail.com',
    city: 'Curitiba, PR',
    deals: 963,
    total: 30423,
    status: 'Ativo'
  }, {
    id: 3,
    name: 'Darrell Steward',
    email: 'darrell@gmail.com',
    city: 'Belo Horizonte, MG',
    deals: 843,
    total: 28549,
    status: 'Ativo'
  }, {
    id: 4,
    name: 'Marina Costa',
    email: 'marina.costa@outlook.com',
    city: 'Porto Alegre, RS',
    deals: 712,
    total: 24120,
    status: 'Pausado'
  }, {
    id: 5,
    name: 'Rafael Nunes',
    email: 'rafael@nunes.com.br',
    city: 'Recife, PE',
    deals: 655,
    total: 21877,
    status: 'Ativo'
  }, {
    id: 6,
    name: 'Júlia Andrade',
    email: 'julia.andrade@gmail.com',
    city: 'Florianópolis, SC',
    deals: 498,
    total: 16302,
    status: 'Novo'
  }],
  orders: [{
    id: '4821',
    customer: 'Danny Liu',
    date: '14/02/2026',
    items: 3,
    total: 1289.9,
    status: 'Pago'
  }, {
    id: '4820',
    customer: 'Bella Deviant',
    date: '14/02/2026',
    items: 1,
    total: 349.0,
    status: 'Pendente'
  }, {
    id: '4819',
    customer: 'Marina Costa',
    date: '13/02/2026',
    items: 5,
    total: 2740.5,
    status: 'Enviado'
  }, {
    id: '4818',
    customer: 'Rafael Nunes',
    date: '13/02/2026',
    items: 2,
    total: 818.0,
    status: 'Pago'
  }, {
    id: '4817',
    customer: 'Júlia Andrade',
    date: '12/02/2026',
    items: 1,
    total: 129.9,
    status: 'Cancelado'
  }, {
    id: '4816',
    customer: 'Darrell Steward',
    date: '12/02/2026',
    items: 4,
    total: 1960.0,
    status: 'Enviado'
  }, {
    id: '4815',
    customer: 'Danny Liu',
    date: '11/02/2026',
    items: 2,
    total: 560.0,
    status: 'Pendente'
  }, {
    id: '4814',
    customer: 'Bella Deviant',
    date: '11/02/2026',
    items: 6,
    total: 3312.4,
    status: 'Pago'
  }],
  notifications: [{
    icon: 'user-plus',
    title: '56 novos usuários cadastrados',
    time: 'Agora mesmo'
  }, {
    icon: 'shopping-bag',
    title: '132 pedidos realizados',
    time: 'Há 59 minutos'
  }, {
    icon: 'wallet',
    title: 'Saque de fundos concluído',
    time: 'Há 12 horas'
  }, {
    icon: 'message-square',
    title: '5 mensagens não lidas',
    time: 'Hoje, 11:59'
  }],
  activities: [{
    who: 'Kate Morrison',
    title: 'Alterou o tema do painel',
    time: 'Agora mesmo'
  }, {
    who: 'Daniel Craig',
    title: '177 novos produtos adicionados',
    time: 'Há 47 minutos'
  }, {
    who: 'Elisabeth Wayne',
    title: '11 produtos arquivados',
    time: 'Há 1 dia'
  }, {
    who: 'Felicia Raspet',
    title: 'Página "Brinquedos" removida',
    time: '2 fev 2026'
  }],
  managers: [{
    name: 'Daniel Craig',
    status: 'online'
  }, {
    name: 'Kate Morrison',
    status: 'away'
  }, {
    name: 'Nataniel Donowan',
    status: 'online'
  }, {
    name: 'Elisabeth Wayne',
    status: 'offline'
  }, {
    name: 'Felicia Raspet',
    status: 'busy'
  }]
};
window.AKP_FMT = {
  brl: v => 'R$ ' + v.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }),
  int: v => v.toLocaleString('pt-BR'),
  tone: {
    Pago: 'success',
    Pendente: 'warning',
    Enviado: 'info',
    Cancelado: 'danger',
    Ativo: 'success',
    Pausado: 'neutral',
    Novo: 'accent'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.AreaChart = __ds_scope.AreaChart;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.ChartLegend = __ds_scope.ChartLegend;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastRegion = __ds_scope.ToastRegion;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.NavSection = __ds_scope.NavSection;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Sheet = __ds_scope.Sheet;

})();
