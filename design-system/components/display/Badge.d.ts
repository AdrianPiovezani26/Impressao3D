import * as React from 'react';
/** Small pill for status, counts and deltas. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'accent' | 'success' | 'danger' | 'warning' | 'info';
  variant?: 'soft' | 'solid';
  size?: 'sm' | 'md';
  /** Leading status dot */
  dot?: boolean;
  /** Leading Lucide icon */
  icon?: string;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
