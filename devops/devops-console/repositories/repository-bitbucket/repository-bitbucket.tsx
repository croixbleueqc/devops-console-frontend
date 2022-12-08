import { Box, Typography } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import React from 'react';
import { CdView } from '@croixbleue/devops.devops-console.ui.cd-view';
import {
  CdStatus,
  RepositoryDefinition,
  RepoStatus,
} from '@croixbleue/devops.devops-console.types';

export type RepositoryBitbucketProps = {
  status: RepoStatus;
};

export function RepositoryBitbucket({ status }: RepositoryBitbucketProps) {
  const { definition, cdStatus } = status;
  const { name, slug, url } = definition;

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        <InventoryIcon />
        {name}
      </Typography>
      <CdView cdStatus={cdStatus} />
    </Box>
  );
}
