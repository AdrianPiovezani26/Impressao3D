import * as React from 'react';
/**
 * Lucide icon wrapper. Pass any Lucide name in kebab-case ("arrow-up-right") or PascalCase.
 * Needs <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script> before the bundle.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, e.g. "layout-dashboard", "bell", "arrow-up-right" */
  name: string;
  /** Pixel size. 16 inline/dense, 18 default, 20 nav/topbar, 24 mobile nav. */
  size?: number;
  /** Stroke width. Default 1.75 — do not go above 2. */
  strokeWidth?: number;
  color?: string;
  /** Accessible label; omit for decorative icons. */
  title?: string;
}
export function Icon(props: IconProps): JSX.Element;
