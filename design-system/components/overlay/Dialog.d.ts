import * as React from 'react';
/** Modal dialog; becomes a bottom sheet with stacked full-width actions under 640px. */
export interface DialogProps {
  open?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Action buttons, right-aligned (primary last) */
  footer?: React.ReactNode;
  /** Max width in px (default 480) */
  width?: number;
  /** Position absolutely inside the nearest positioned parent instead of the viewport */
  contained?: boolean;
  children?: React.ReactNode;
  className?: string;
}
export function Dialog(props: DialogProps): JSX.Element | null;
