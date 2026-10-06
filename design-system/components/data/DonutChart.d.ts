import * as React from 'react';
export interface ChartDatum { label: string; value: number; /** Formatted value for display */ display?: string; color?: string; }
/** Segmented ring chart with a center KPI; hover a segment to focus it. */
export interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ChartDatum[];
  size?: number;
  thickness?: number;
  /** Radians between segments */
  gap?: number;
  /** Center value when nothing is hovered */
  value?: React.ReactNode;
  /** Center caption */
  label?: React.ReactNode;
}
export function DonutChart(props: DonutChartProps): JSX.Element;
export interface ChartLegendProps { items: ChartDatum[]; columns?: number; }
/** Dot + label + value legend grid used beside charts */
export function ChartLegend(props: ChartLegendProps): JSX.Element;
