import * as React from 'react';
/**
 * KPI tile: label, large tabular value, trend delta + comparison.
 */
export interface StatCardProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  label: React.ReactNode;
  /** Pre-formatted value, e.g. "R$ 3.131.021" */
  value: React.ReactNode;
  /** e.g. "+0,4%" — sign decides direction unless `trend` is set */
  delta?: string;
  trend?: 'up' | 'down' | 'flat';
  /** e.g. "vs mês anterior" */
  comparison?: string;
  /** Muted caption instead of / after delta, e.g. "Meta: R$ 1,1 mi" */
  caption?: string;
  /** Lucide icon shown in a lime chip before the label */
  icon?: string;
  variant?: 'default' | 'raised';
  /** Extra content below (sparkline, progress) */
  children?: React.ReactNode;
}
export function StatCard(props: StatCardProps): JSX.Element;
