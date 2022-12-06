import React, { ReactNode, useContext, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PowerOffIcon from '@mui/icons-material/PowerOff';

import { GlobalStateProvider } from '@croixbleue/devops.devops-console.global-state';
import { HeaderBar } from '@croixbleue/devops.devops-console.ui.header-bar';
import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
// import { AuthenticationOidc } from '@croixbleue/devops.devops-console.authentications.authentication-oidc';
import { Box, Container } from '@mui/material';
import {
  RepositoryBitbucket,
  RepositoryDefinition,
} from '@croixbleue/devops.devops-console.repositories.repository-bitbucket';

export type DevopsConsoleAppProps = {
  children?: ReactNode;
};

export function DevopsConsoleAppExample({ children }: DevopsConsoleAppProps) {
  const [stateAuth, dispatch] = useContext(AuthenticationStateContext);
  const [repolist, setRepolist] = React.useState([]);
  const [selectedRepo, setSelectedRepo] = React.useState<RepositoryDefinition>({
    name: '',
    slug: '',
    url: '',
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/v2/sccs/repositories?plugin_id=cbq')
      .then((response) => response.json())
      .then((data) => {
        const list = data
          .map((r: { name: string; slug: string }) => ({ label: r.name, value: r.name }))
          .sort((a: { label: string }, b: { label: string }) => a.label.localeCompare(b.label));
        setRepolist(list);
      })
      .catch((e) => console.error(e));
  }, []);

  const handleSearch = (repoName: string) => {
    let req = new Request(
      `http://localhost:5000/api/v2/sccs/repositories/${repoName}?plugin_id=cbq`
    );
    fetch(req)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.warn(response);
      })
      .then((data) => setSelectedRepo({ name: data.name, slug: data.slug, url: data.url ?? '' }))
      .catch((e) => console.error(e));
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <HeaderBar appName="DevOps Console" searchOptions={repolist} searchFn={handleSearch}>
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
      </Box>
      <RepositoryBitbucket definition={selectedRepo} />
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
}

export function DevopsConsoleApp({ children }: DevopsConsoleAppProps) {
  return (
    <GlobalStateProvider>
      <DevopsConsoleAppExample>{children}</DevopsConsoleAppExample>
    </GlobalStateProvider>
  );
}
