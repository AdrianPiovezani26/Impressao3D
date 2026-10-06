import * as React from 'react';
export interface Crumb { label: string; href?: string; onClick?: (e: React.MouseEvent) => void; }
/** Slash-separated location trail for the top bar; last item is the current page. */
export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> { items: Crumb[]; }
export function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
