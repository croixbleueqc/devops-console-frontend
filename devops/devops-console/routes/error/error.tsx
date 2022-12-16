import { PageTitle } from '@croixbleue/devops.devops-console.ui.page-title';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useRouteError } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <Box id="error-page">
      <PageTitle>
        <ErrorOutlineIcon fontSize="inherit" /> Woopelaye!
      </PageTitle>
      <Typography variant="body1" component="p">
        {error.statusText || error.message}
      </Typography>
    </Box>
  );
}
