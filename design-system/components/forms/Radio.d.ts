import * as React from 'react';
/** Radio button for one-of-many choices (group via shared name). */
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  description?: string;
}
export function Radio(props: RadioProps): JSX.Element;
