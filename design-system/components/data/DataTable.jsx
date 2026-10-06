import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';

export function DataTable({ columns = [], rows = [], rowKey = 'id', selectable = false, selected, onSelectChange, stackOnMobile = true, compact = false, defaultSort, onRowClick, empty = 'Nenhum registro encontrado', className = '' }) {
  const [sort, setSort] = React.useState(defaultSort || null);
  const [innerSel, setInnerSel] = React.useState([]);
  const sel = selected || innerSel;
  const setSel = (v) => { setInnerSel(v); onSelectChange && onSelectChange(v); };
  const sorted = React.useMemo(() => {
    if (!sort) return rows;
    const col = columns.find((c) => c.key === sort.key);
    const get = col && col.sortValue ? col.sortValue : (r) => r[sort.key];
    return [...rows].sort((a, b) => { const x = get(a), y = get(b); return (x > y ? 1 : x < y ? -1 : 0) * (sort.dir === 'asc' ? 1 : -1); });
  }, [rows, sort, columns]);
  const toggleSort = (k) => setSort((s) => (s && s.key === k ? { key: k, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key: k, dir: 'desc' }));
  const allOn = rows.length > 0 && sel.length === rows.length;
  const cls = ['akp-table', stackOnMobile && 'akp-table--stack', compact && 'akp-table--compact'].filter(Boolean).join(' ');
  return (
    <div className={'akp-table-wrap ' + className}>
      <table className={cls}>
        <thead>
          <tr>
            {selectable ? <th className="is-check"><Checkbox aria-label="Selecionar todos" checked={allOn} onChange={() => setSel(allOn ? [] : rows.map((r) => r[rowKey]))} /></th> : null}
            {columns.map((c) => {
              const on = sort && sort.key === c.key;
              return (
                <th key={c.key} className={c.align ? 'is-' + c.align : ''} style={{ width: c.width }} aria-sort={on ? (sort.dir === 'asc' ? 'ascending' : 'descending') : undefined}>
                  {c.sortable ? (
                    <button type="button" onClick={() => toggleSort(c.key)}>{c.label}<Icon name={on ? (sort.dir === 'asc' ? 'chevron-up' : 'chevron-down') : 'chevrons-up-down'} size={14} /></button>
                  ) : c.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr><td colSpan={columns.length + (selectable ? 1 : 0)} style={{ textAlign: 'center', color: 'var(--text-tertiary)', height: 120 }}>{empty}</td></tr>
          ) : sorted.map((r, ri) => {
            const k = r[rowKey] ?? ri, on = sel.includes(k);
            return (
              <tr key={k} className={on ? 'akp-table__row--sel' : ''} onClick={onRowClick ? () => onRowClick(r) : undefined} style={onRowClick ? { cursor: 'pointer' } : undefined}>
                {selectable ? <td className="is-check" onClick={(e) => e.stopPropagation()}><Checkbox aria-label="Selecionar linha" checked={on} onChange={() => setSel(on ? sel.filter((x) => x !== k) : [...sel, k])} /></td> : null}
                {columns.map((c, ci) => (
                  <td key={c.key} data-label={typeof c.label === 'string' ? c.label : ''} className={[c.align ? 'is-' + c.align : '', (c.primary || (!columns.some((x) => x.primary) && ci === 0)) ? 'is-primary' : ''].join(' ')}>
                    {c.render ? c.render(r) : r[c.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
