import { createTheme, Link, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { red } from '@mui/material/colors';
import { CdStatus } from '@croixbleue/devops.devops-console.types';
import { CdEnvironment, ProjectEnvironments } from '@croixbleue/devops.devops-console.types/types';

export type CdViewProps = {
  title?: string;
  cdStatus: CdStatus;
  environments?: ProjectEnvironments;
};

export function CdView({ title, cdStatus, environments }: CdViewProps) {
  const xs = Math.floor(12 / (environments != null ? environments.length : cdStatus.length));

  const cdItems = (function () {
    if (environments != null) {
      return environments.map(({ enabled, name }, i) => {
        let c = cdStatus.find((c) => c.environment === name);
        return (
          <Grid key={i} xs={xs}>
            <CdItem
              theme={
                enabled ? undefined : createTheme({ palette: { background: { paper: red[100] } } })
              }
            >
              {CdItemContent(name, c)}
            </CdItem>
          </Grid>
        );
      });
    } else {
      return cdStatus.map((c, i) => (
        <Grid key={i} xs={xs}>
          <CdItem>{CdItemContent(c.environment, c)}</CdItem>
        </Grid>
      ));
    }
  })();

  return cdStatus.length > 0 ? (
    <Grid container spacing={2}>
      {title && (
        <Grid xs={12}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
      )}
      {cdItems}
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

function CdItemContent(name: string, c?: CdEnvironment) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      {c != null ? (
        <>
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
        </>
      ) : null}
    </>
  );
}
