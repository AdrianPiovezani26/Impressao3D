import * as React from 'react';
/** Floating confirmation that auto-dismisses; bottom-right on desktop, above BottomNav on mobile. */
export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: 'success' | 'danger' | 'warning' | 'info' | 'accent';
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  onClose?: () => void;
}
export function Toast(props: ToastProps): JSX.Element;
export interface ToastRegionProps { children?: React.ReactNode; }
/** Fixed stacking region for toasts */
export function ToastRegion(props: ToastRegionProps): JSX.Element;
