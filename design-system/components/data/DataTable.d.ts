import * as React from 'react';
export interface DataTableColumn<T = any> {
  key: string;
  label: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  sortable?: boolean;
  /** Value used for sorting when the cell is rendered */
  sortValue?: (row: T) => string | number;
  render?: (row: T) => React.ReactNode;
  width?: number | string;
  /** Becomes the card header when stacked on mobile (defaults to first column) */
  primary?: boolean;
}
/**
 * Sortable, selectable table that collapses into stacked cards under 640px.
 */
export interface DataTableProps<T = any> {
  columns: DataTableColumn<T>[];
  rows: T[];
  rowKey?: string;
  selectable?: boolean;
  selected?: Array<string | number>;
  onSelectChange?: (keys: Array<string | number>) => void;
  /** Collapse rows into label/value cards on small screens. Default true. */
  stackOnMobile?: boolean;
  compact?: boolean;
  defaultSort?: { key: string; dir: 'asc' | 'desc' };
  onRowClick?: (row: T) => void;
  empty?: React.ReactNode;
  className?: string;
}
export function DataTable<T = any>(props: DataTableProps<T>): JSX.Element;
