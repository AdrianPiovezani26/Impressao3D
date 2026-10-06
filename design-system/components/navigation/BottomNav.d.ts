import * as React from 'react';
export interface BottomNavItem { value: string; label: string; icon: string; badge?: number | string; }
/** Mobile tab bar (≤ 640px): 4–5 primary destinations, lime pill on the active icon. */
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  items: BottomNavItem[];
  value: string;
  onChange?: (value: string) => void;
}
export function BottomNav(props: BottomNavProps): JSX.Element;
