import { Box, Typography } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import React from 'react';
import { CdView } from '@croixbleue/devops.devops-console.ui.cd-view';
import { RepoStatus } from '@croixbleue/devops.devops-console.types';
import { PageTitle } from '@croixbleue/devops.devops-console.ui.page-title';

export type RepositoryBitbucketProps = {
  status: RepoStatus;
};

export function RepositoryBitbucket({ status }: RepositoryBitbucketProps) {
  const { definition, cdStatus } = status;

  return (
    <Box sx={{ width: '100%' }}>
      <PageTitle>
        <InventoryIcon fontSize="inherit" />
        {definition.name}
      </PageTitle>
      <CdView cdStatus={cdStatus} />
    </Box>
  );
}
