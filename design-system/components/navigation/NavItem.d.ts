import * as React from 'react';
/** Sidebar navigation row; active = solid lime pill. */
export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  icon?: string;
  label: string;
  active?: boolean;
  /** Count badge on the right */
  badge?: React.ReactNode;
  /** Icon-only 44px square (tablet rail) */
  collapsed?: boolean;
  /** Leading › chevron for groups with children */
  expandable?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export function NavItem(props: NavItemProps): JSX.Element;
export interface NavSectionProps { label?: string; collapsed?: boolean; children?: React.ReactNode; }
/** Uppercase overline group heading for sidebar sections */
export function NavSection(props: NavSectionProps): JSX.Element;
