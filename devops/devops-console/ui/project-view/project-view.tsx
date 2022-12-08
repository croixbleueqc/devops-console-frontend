import { K8sStatus, Project, RepoStatus } from '@croixbleue/devops.devops-console.types';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { ReactNode } from 'react';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

export type ProjectViewProps = {
  cdViews?: ReactNode[];
  k8sViews?: ReactNode;
  projectConfig: Project;
};

export function ProjectView({ projectConfig, cdViews, k8sViews }: ProjectViewProps) {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        <DashboardOutlinedIcon /> {projectConfig.name}
      </Typography>
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Deployed versions
          </Typography>
          {cdViews?.map((c) => (
            <Grid xs={12}>{c}</Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
