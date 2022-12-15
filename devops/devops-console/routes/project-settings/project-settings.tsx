import React, { ReactNode } from 'react';

export type ProjectSettingsProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ProjectSettings({ children }: ProjectSettingsProps) {
  return (
    <div>
      {children}
    </div>
  );
}
