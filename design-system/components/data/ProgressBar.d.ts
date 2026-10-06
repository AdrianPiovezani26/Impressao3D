import * as React from 'react';
/** Linear progress / goal bar. */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: React.ReactNode;
  /** Right-side label; defaults to the percent */
  valueLabel?: React.ReactNode;
  /** Fill override (defaults to accent) */
  color?: string;
  size?: 'md' | 'lg';
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;
