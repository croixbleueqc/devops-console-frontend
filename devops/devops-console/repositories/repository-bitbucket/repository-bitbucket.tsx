import { Box, LinearProgress, Link, Paper, styled, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { ReactNode, useEffect } from 'react';

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
};

export function RepositoryBitbucket({ definition }: RepositoryBitbucketProps) {
  const { name, slug, url } = definition;
  let [loading, setLoading] = React.useState(name === '');
  let [cd, setCd] = React.useState<CD[]>([]);

  useEffect(() => {
    if (!name) return;
    setLoading(true);
    (async () => {
      try {
        let req = new Request(
          `http://localhost:5000/api/v2/sccs/repositories/${name}/cd?plugin_id=cbq`
        );
        let response = await fetch(req);
        let cd = await response.json();
        setCd(cd);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [name]);

  useEffect(() => {
    if (cd) {
      setLoading(false);
    }
  }, [cd]);

  return (
    <Box sx={{ width: '100%' }}>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <CdView cd={cd} />
        </>
      )}
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
  return (
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
  );
}
