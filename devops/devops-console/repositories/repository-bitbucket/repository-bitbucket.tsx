import React, { ReactNode } from 'react';

export type RepositoryBitbucketProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function RepositoryBitbucket({ children }: RepositoryBitbucketProps) {
  return (
    <div>
      {children}
    </div>
  );
}
