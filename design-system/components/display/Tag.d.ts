import * as React from 'react';
/** Outlined pill chip — filters, categories, plan labels. Clickable when onClick is set. */
export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
  /** Selected filter state (lime tint) */
  selected?: boolean;
  /** Shows an × and calls back */
  onRemove?: (e: React.SyntheticEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}
export function Tag(props: TagProps): JSX.Element;
