import * as React from 'react';
/** On/off toggle that applies immediately (settings, feature flags). */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}
export function Switch(props: SwitchProps): JSX.Element;
