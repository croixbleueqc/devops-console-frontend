import { K8sStatus, Project, RepoStatus } from '@croixbleue/devops.devops-console.types';
import Grid from '@mui/material/Unstable_Grid2';
import React, { ReactNode } from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { CdView } from '@croixbleue/devops.devops-console.ui.cd-view';
import { PageTitle } from '@croixbleue/devops.devops-console.ui.page-title';
import { Box } from '@mui/material';

export type ProjectViewProps = {
  k8sViews?: ReactNode;
  projectConfig: Project;
  repoStatuses: RepoStatus[];
};

export function ProjectView({
  projectConfig,
  repoStatuses: repoSelection,
  k8sViews,
}: ProjectViewProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <PageTitle>
        <DashboardOutlinedIcon fontSize="inherit" /> Project: {projectConfig.name}
      </PageTitle>
      <Grid container>
        <Grid xs={12}>
          {repoSelection?.map(({ definition, cdStatus }) => (
            <Grid xs={12}>
              <CdView
                title={definition.name}
                cdStatus={cdStatus}
                environments={projectConfig.environments}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
