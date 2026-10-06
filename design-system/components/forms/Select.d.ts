import * as React from 'react';
export interface SelectOption { value: string; label: string; }
/** Native select styled as an AKP3D control — reliable on mobile pickers. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  /** Leading Lucide icon */
  icon?: string;
  options: Array<string | SelectOption>;
  size?: 'sm' | 'md' | 'lg';
}
export function Select(props: SelectProps): JSX.Element;
