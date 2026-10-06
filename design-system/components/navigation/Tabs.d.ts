/** Underline tabs for switching sections inside a page or card. Scrolls horizontally on mobile. */
export interface TabItem { value: string; label: string; icon?: string; count?: number | string; }
export interface TabsProps {
  items: Array<string | TabItem>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}
export function Tabs(props: TabsProps): JSX.Element;
