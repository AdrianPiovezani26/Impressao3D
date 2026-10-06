import * as React from 'react';
/** Circular user avatar — photo or tinted initials, optional status dot. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — drives initials, tint and title */
  name?: string;
  src?: string;
  /** px: 24 · 32 (default) · 40 · 48 */
  size?: number;
  status?: 'online' | 'away' | 'busy' | 'offline';
  /** Lime ring (current user / selected) */
  ring?: boolean;
}
export function Avatar(props: AvatarProps): JSX.Element;
export interface AvatarGroupProps { children?: React.ReactNode; className?: string; }
/** Overlapping avatar stack */
export function AvatarGroup(props: AvatarGroupProps): JSX.Element;
