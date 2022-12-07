import React, { ReactNode, useContext, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PowerOffIcon from '@mui/icons-material/PowerOff';

import { GlobalStateProvider } from '@croixbleue/devops.devops-console.global-state';
import { HeaderBar } from '@croixbleue/devops.devops-console.ui.header-bar';
import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
// import { AuthenticationOidc } from '@croixbleue/devops.devops-console.authentications.authentication-oidc';
import { Box, Container, LinearProgress } from '@mui/material';
import {
  RepositoryBitbucket,
  RepositoryDefinition,
} from '@croixbleue/devops.devops-console.repositories.repository-bitbucket';
import { useBusyIndicator } from '@croixbleue/devops.devops-console.ui.hooks.use-busy-indicator';

export type DevopsConsoleAppProps = {};

const baseUrl = 'http://localhost:5000/api/v2';

export function DevopsConsoleAppExample({}: DevopsConsoleAppProps) {
  const { imBusy, imNotBusy, busy } = useBusyIndicator();
  const [stateAuth, dispatch] = useContext(AuthenticationStateContext);
  const [repoList, setRepoList] = React.useState([]);
  const [selectedRepo, setSelectedRepo] = React.useState<RepositoryDefinition | null>(null);
  const [cd, setCd] = React.useState([]);

  useEffect(() => {
    fetchAndSet(`${baseUrl}/sccs/repositories?plugin_id=cbq`, (data) => {
      const list = data
        .map((r: { name: string; slug: string }) => ({ label: r.name, value: r.name }))
        .sort((a: { label: string }, b: { label: string }) => a.label.localeCompare(b.label));
      setRepoList(list);
    });
  }, []);

  const handleSearch = (repoName: string) => {
    Promise.all([
      fetchAndSet(`${baseUrl}/sccs/repositories/${repoName}?plugin_id=cbq`, (d) =>
        setSelectedRepo({ name: d.name, slug: d.slug, url: d.url ?? '' })
      ),
      fetchAndSet(`${baseUrl}/sccs/repositories/${repoName}/cd?plugin_id=cbq`, setCd),
    ]);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: '1em', flexGrow: 1 }}>
        <HeaderBar appName="DevOps Console" searchOptions={repoList} searchFn={handleSearch}>
          {stateAuth.isConnected ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-headerbar"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-headerbar"
                color="inherit"
                onClick={() => {
                  dispatch({ type: 'markAsUnconnected' });
                  // dispatch({ type: 'hideAuth' });
                }}
              >
                <PowerOffIcon />
              </IconButton>
            </>
          ) : (
            <Typography component="span">Guest</Typography>
          )}
        </HeaderBar>
        {busy && <LinearProgress />}
      </Box>
      {!busy && !!selectedRepo && !!cd && <RepositoryBitbucket cd={cd} definition={selectedRepo} />}
      {/*       <div>
        {stateAuth.displayAuth ? (
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'hideAuth' });
            }}
          >
            Hide connexion button
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              dispatch({ type: 'showAuth' });
            }}
          >
            Display connexion button
          </button>
        )}
        {children}

        <AuthenticationOidc />
          </div> */}
    </Container>
  );

  function fetchAndSet(url: string, setFn: (d: any) => void): Promise<void> {
    imBusy();
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Error ${response.status} ${response.statusText}`);
      })
      .then((data) => setFn(data))
      .catch((e) => console.error(e))
      .finally(() => imNotBusy());
  }
}

export function DevopsConsoleApp({}: DevopsConsoleAppProps) {
  return (
    <GlobalStateProvider>
      <DevopsConsoleAppExample />
    </GlobalStateProvider>
  );
}
