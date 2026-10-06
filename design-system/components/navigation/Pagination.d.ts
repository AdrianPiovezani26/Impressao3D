import * as React from 'react';
/** Page navigation for tables; `compact` shows "3 / 12" for mobile. */
export interface PaginationProps {
  page: number;
  totalPages: number;
  onChange?: (page: number) => void;
  /** Left-side summary, e.g. "1–10 de 128" */
  info?: React.ReactNode;
  compact?: boolean;
  className?: string;
}
export function Pagination(props: PaginationProps): JSX.Element;
