import { Box, Link, Paper, styled, Typography } from '@mui/material';
import InventoryIcon from '@mui/icons-material/Inventory';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useEffect } from 'react';
import { useBusyIndicator } from '@croixbleue/devops.devops-console.ui.hooks.use-busy-indicator';

export type RepositoryDefinition = {
  name: string;
  slug: string;
  url: string;
};

type CD = {
  environment: string;
  version: string;
  readonly: boolean;
  pullrequest?: string;
};

export type RepositoryBitbucketProps = {
  /**
   * a node to be rendered in the special component.
   */
  definition: RepositoryDefinition;
  cd: CD[];
};

export function RepositoryBitbucket({ cd, definition }: RepositoryBitbucketProps) {
  const { name, slug, url } = definition;

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" gutterBottom>
        <InventoryIcon />
        {name}
      </Typography>
      <CdView cd={cd} />
    </Box>
  );
}

const CdItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CdView({ cd }: { cd: CD[] }) {
  return cd.length > 0 ? (
    <Grid container spacing={2}>
      {cd.map((c, i) => (
        <Grid key={i} xs={Math.floor(12 / cd.length)}>
          <CdItem>
            <Typography variant="h6" gutterBottom>
              {c.environment}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {`${c.version.substring(0, 8)}...`}
            </Typography>
            {c.pullrequest && (
              <Typography variant="subtitle2">
                <Link href={c.pullrequest} target="_blank">
                  Pullrequest
                </Link>
              </Typography>
            )}
          </CdItem>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography variant="h6" gutterBottom>
      No continuous deployment found for this repository
    </Typography>
  );
}
