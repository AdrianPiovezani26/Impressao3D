import * as React from 'react';
/** Inline, persistent message inside a page or card. */
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'accent';
  title?: React.ReactNode;
  /** Override the default tone icon */
  icon?: string;
  /** Right-side action (Button sm ghost) */
  action?: React.ReactNode;
  children?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;
