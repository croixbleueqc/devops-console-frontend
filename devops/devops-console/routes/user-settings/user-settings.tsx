import React, { ReactNode } from 'react';

export type UserSettingsProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function UserSettings({ children }: UserSettingsProps) {
  return (
    <div>
      {children}
    </div>
  );
}
