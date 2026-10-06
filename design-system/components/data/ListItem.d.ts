import * as React from 'react';
/** Row for notifications, activity feeds, contacts and settings lists. */
export interface ListItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Leading node (Avatar). Overrides `icon`. */
  leading?: React.ReactNode;
  /** Lucide icon in a lime-tint circle */
  icon?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Right-aligned muted text (time, amount) */
  meta?: React.ReactNode;
  /** Right-aligned actions (IconButtons) */
  trailing?: React.ReactNode;
  /** Solid lime highlight */
  selected?: boolean;
  /** Draw a vertical connector to the next row (activity feed) */
  timeline?: boolean;
  shape?: 'pill' | 'rect';
  onClick?: (e: React.MouseEvent) => void;
}
export function ListItem(props: ListItemProps): JSX.Element;
