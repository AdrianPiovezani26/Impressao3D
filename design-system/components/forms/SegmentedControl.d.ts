/** Pill-group toggle for switching a view or range (Dia / Semana / Mês). */
export interface SegmentedOption { value: string; label: string; icon?: string; }
export interface SegmentedControlProps {
  options: Array<string | SegmentedOption>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Stretch to full width (mobile) */
  block?: boolean;
  className?: string;
}
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
