import * as React from 'react';
/** Square checkbox; lime when checked. Use for multi-select and table row selection. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  description?: string;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
