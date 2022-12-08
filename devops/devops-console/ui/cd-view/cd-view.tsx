import { Link, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { CdStatus } from '@croixbleue/devops.devops-console.types';

export type CdViewProps = {
  title?: string;
  cdStatus: CdStatus;
};

export function CdView({ title, cdStatus }: CdViewProps) {
  return cdStatus.length > 0 ? (
    <Grid container spacing={2}>
      {title && <Grid xs={12}>{title}</Grid>}
      {cdStatus.map((c, i) => (
        <Grid key={i} xs={Math.floor(12 / cdStatus.length)}>
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

const CdItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
