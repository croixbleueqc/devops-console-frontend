import React, { ReactNode } from 'react';

export type ProjectProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Project({ children }: ProjectProps) {
  return (
    <div>
      {children}
    </div>
  );
}
