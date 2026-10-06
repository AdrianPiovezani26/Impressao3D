import * as React from 'react';
/** Edge-anchored panel: left = mobile nav, right = details/filters/notifications, bottom = mobile actions. */
export interface SheetProps {
  open?: boolean;
  onClose?: () => void;
  side?: 'left' | 'right' | 'bottom';
  title?: React.ReactNode;
  /** px width for left/right */
  width?: number;
  contained?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export function Sheet(props: SheetProps): JSX.Element | null;
