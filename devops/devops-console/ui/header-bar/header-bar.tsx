import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Search, SearchOption } from '@croixbleue/devops.devops-console.ui.search';
import { ProjectSelect } from '@croixbleue/devops.devops-console.ui.project-select';
import { ProjectMap, RepositoryDefinition } from '@croixbleue/devops.devops-console.types';

export type HeaderBarProps = {
  appName?: string;
  children?: ReactNode;
  projects: ProjectMap;
  repositories: RepositoryDefinition[];
  onSearch?: (repoIdx: number | null) => void;
  onProjectChange?: (projectKey: string) => void;
};

export function HeaderBar({
  appName,
  projects,
  repositories,
  onSearch = () => {},
  onProjectChange = (projectKey: string) => console.log('project changed', projectKey),
  children,
}: HeaderBarProps) {
  const searchOptions: SearchOption[] = repositories
    .sort(({ name: a }, { name: b }) => a.localeCompare(b))
    .map(({ name }, idx) => ({ label: name, value: idx }));

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {appName ?? 'DevOps Console'}
        </Typography>
        <ProjectSelect projects={projects} onChange={onProjectChange} />
        <Search options={searchOptions} onChange={onSearch} />
        {children}
      </Toolbar>
    </AppBar>
  );
}
