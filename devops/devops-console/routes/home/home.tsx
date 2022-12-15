import { PageTitle } from '@croixbleue/devops.devops-console.ui.page-title';
import { Box } from '@mui/material';
import React from 'react';

export function Home() {
  return (
    <Box>
      <PageTitle>Welcome.</PageTitle>
    </Box>
  );
}

export async function homeLoader() {
  return {};
}
