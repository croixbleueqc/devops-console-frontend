import { K8sDeploymentStatus } from '@croixbleue/devops.devops-console.types';
import { PodsView } from '@croixbleue/devops.devops-console.ui.pod-view';
import { Paper, Table, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

export type K8sDeploymentViewProps = {
  status: K8sDeploymentStatus;
};

export function K8sDeploymentView({ status }: K8sDeploymentViewProps) {
  const handleDeletePod = (podName: string) =>
    console.log(`Delete pod ${podName}. Not implemented yet.`);
  return (
    <Grid container spacing={2}>
      <Grid xs={3}>
        <Typography variant="h5" gutterBottom>
          Deployment status
        </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableRow>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Namespace:{' '}
              </TableCell>
              <TableCell>{status.namespace}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Cluster:{' '}
              </TableCell>
              <TableCell>{status.cluster}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                Permission:{' '}
              </TableCell>
              <TableCell>{status.permission}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Grid>

      <Grid xs={9}>
        <Typography variant="h6" gutterBottom>
          Pods
        </Typography>
        <PodsView pods={status.pods} onDeletePod={handleDeletePod} />
      </Grid>
    </Grid>
  );
}
