import { defaultClient } from '@croixbleue/devops.devops-console.backend-client';
import { ProjectConfig, RepoStatus } from '@croixbleue/devops.devops-console.types';
import { ProjectView } from '@croixbleue/devops.devops-console.ui.project-view';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

type ProjectData = { projectConfig: ProjectConfig; repoStatuses: RepoStatus[] };

export function Project() {
  const { projectConfig, repoStatuses } = useLoaderData() as ProjectData;
  return <ProjectView projectConfig={projectConfig} repoStatuses={repoStatuses} />;
}

export async function projectLoader({ params }): Promise<ProjectData> {
  const projectConfig = await defaultClient.getProjectConfig(params.key);
  const repoStatuses = await Promise.all(
    projectConfig.repositories.map((repoName) => defaultClient.getRepoStatus(repoName))
  );
  return { projectConfig, repoStatuses };
}
