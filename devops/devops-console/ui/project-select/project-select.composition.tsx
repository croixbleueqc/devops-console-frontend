import { ProjectMap } from '@croixbleue/devops.devops-console.project';
import React from 'react';
import { ProjectSelect } from './project-select';

const projects: ProjectMap = {
  'PROJECT-1': {
    name: 'Project 1',
    repositories: ['repo-1', 'repo-2', 'repo-3'],
    environments: [
      { enabled: true, name: 'dev' },
      { enabled: true, name: 'qa' },
      { enabled: true, name: 'prod' },
    ],
  },
  'PROJECT-2': {
    name: 'Project 2',
    repositories: ['repo-1', 'repo-2', 'repo-3'],
    environments: [
      { enabled: true, name: 'dev' },
      { enabled: true, name: 'qa' },
      { enabled: true, name: 'prod' },
    ],
  },
  'PROJECT-3': {
    name: 'Project 3',
    repositories: ['repo-1', 'repo-2', 'repo-3'],
    environments: [
      { enabled: true, name: 'dev' },
      { enabled: true, name: 'qa' },
      { enabled: true, name: 'prod' },
    ],
  },
};

export const BasicProjectSelect = () => {
  return <ProjectSelect projects={projects} />;
};
