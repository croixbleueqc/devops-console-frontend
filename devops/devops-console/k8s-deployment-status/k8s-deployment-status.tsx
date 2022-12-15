import React, { ReactNode } from 'react';

export type K8SDeploymentStatusProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function K8SDeploymentStatus({ children }: K8SDeploymentStatusProps) {
  return (
    <div>
      {children}
    </div>
  );
}
