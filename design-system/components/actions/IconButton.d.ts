import * as React from 'react';
/** Circular icon-only button for toolbars, card menus and list-row actions. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name */
  icon: string;
  /** Required accessible label (also used as native title) */
  label: string;
  variant?: 'ghost' | 'secondary' | 'primary' | 'soft';
  /** sm 32 · md 40 · lg 48 */
  size?: 'sm' | 'md' | 'lg';
  /** Show unread dot (notifications) */
  dot?: boolean;
}
export function IconButton(props: IconButtonProps): JSX.Element;
