import { RepositoryBitbucket } from '@croixbleue/devops.devops-console.repositories.repository-bitbucket';
import { RepoStatus } from '@croixbleue/devops.devops-console.types';
import { K8sDeploymentView } from '@croixbleue/devops.devops-console.ui.k8s-deployment-view';
import React from 'react';

export type RepoViewProps = {
  status: RepoStatus;
};

export function RepoView({ status }: RepoViewProps) {
  const isBitbucket = status.definition.remoteProvider === 'bitbucket';
  return (
    <div>
      {isBitbucket ? (
        <RepositoryBitbucket status={status} />
      ) : (
        <div>{/* TODO: implement github component */}Not implemented</div>
      )}
      <K8sDeploymentView status={status.k8sStatus} />
    </div>
  );
}
