import * as React from 'react';
/** Smoothed area/line chart with gradient fill, dashed grid and hover tooltip. Fluid width. */
export interface AreaChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: number[];
  /** X labels (same length as data) */
  labels?: string[];
  height?: number;
  /** Stroke / gradient color. Default emerald. */
  color?: string;
  grid?: boolean;
  showAxis?: boolean;
  formatValue?: (v: number) => React.ReactNode;
}
export function AreaChart(props: AreaChartProps): JSX.Element;
