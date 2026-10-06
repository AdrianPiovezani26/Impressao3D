import * as React from 'react';
/**
 * Pill-shaped action button. One primary (lime) per view region.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm 32px · md 40px · lg 48px (use lg for mobile primary actions) */
  size?: 'sm' | 'md' | 'lg';
  /** Leading Lucide icon name */
  icon?: string;
  /** Trailing Lucide icon name */
  iconRight?: string;
  loading?: boolean;
  /** Full width */
  block?: boolean;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
