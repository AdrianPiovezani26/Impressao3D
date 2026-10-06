import * as React from 'react';
export interface MenuItem { label?: React.ReactNode; icon?: string; hint?: string; danger?: boolean; checked?: boolean; heading?: string; separator?: boolean; onSelect?: () => void; }
/** Dropdown action menu anchored to a trigger (card "more", row actions, user menu). */
export interface MenuProps {
  trigger: React.ReactNode;
  /** Items; use '-' or { separator: true } for dividers and { heading } for group labels */
  items: Array<MenuItem | '-'>;
  align?: 'start' | 'end';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}
export function Menu(props: MenuProps): JSX.Element;
