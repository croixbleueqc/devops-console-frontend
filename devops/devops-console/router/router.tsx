import React, { ReactNode } from 'react';

export type RouterProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Router({ children }: RouterProps) {
  return (
    <div>
      {children}
    </div>
  );
}
