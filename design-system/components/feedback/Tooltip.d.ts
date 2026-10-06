import * as React from 'react';
/** Inverted hover/focus label for icon-only controls; optional shortcut chip. */
export interface TooltipProps {
  content: React.ReactNode;
  /** Shortcut hint, e.g. "⌘K" */
  kbd?: string;
  placement?: 'top' | 'bottom';
  /** Force visible (demos) */
  open?: boolean;
  children: React.ReactNode;
  className?: string;
}
export function Tooltip(props: TooltipProps): JSX.Element;
