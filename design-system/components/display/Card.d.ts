import * as React from 'react';
/**
 * The base dashboard surface: graphite panel, 14px radius, no border in dark mode.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned header slot — typically an IconButton "more-vertical" or a Select */
  actions?: React.ReactNode;
  /** raised = lighter graphite for nested/featured; promo = green gradient (max one per screen) */
  variant?: 'default' | 'raised' | 'promo';
  /** Remove body padding (for tables / edge-to-edge charts); header keeps its padding */
  flush?: boolean;
  /** Hover state + pointer */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
