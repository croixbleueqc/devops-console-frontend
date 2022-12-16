import { RepoStatus } from '@croixbleue/devops.devops-console.types';
import { RepoView } from '@croixbleue/devops.devops-console.ui.repo-view';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { defaultClient } from '@croixbleue/devops.devops-console.backend-client';

export function Repository() {
  const repoStatus = useLoaderData() as RepoStatus;
  return <RepoView status={repoStatus} />;
}

export async function repositoryLoader({ params }) {
  return defaultClient.getRepoStatus(params.name);
}
