import * as React from 'react';
/** Text input with optional label, leading icon, keyboard hint, helper and error text. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  /** Error message — also switches the control to the error style */
  error?: string;
  /** Leading Lucide icon name (e.g. "search") */
  icon?: string;
  /** Keyboard shortcut chip shown at the end, e.g. "⌘K" */
  kbd?: string;
  /** Arbitrary trailing node (e.g. an IconButton) */
  trailing?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}
export function Input(props: InputProps): JSX.Element;
