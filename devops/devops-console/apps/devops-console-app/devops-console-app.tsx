import React, { useContext, useEffect, useState } from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import { Box, Container, LinearProgress } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
import { GlobalStateProvider } from '@croixbleue/devops.devops-console.global-state';
import { RepositoryBitbucket } from '@croixbleue/devops.devops-console.repositories.repository-bitbucket';
import {
  CdStatus,
  ProjectMap,
  RepositoryDefinition,
  RepoStatus,
} from '@croixbleue/devops.devops-console.types';
import { HeaderBar } from '@croixbleue/devops.devops-console.ui.header-bar';
import { useBusyIndicator } from '@croixbleue/devops.devops-console.ui.hooks.use-busy-indicator';
// import { AuthenticationOidc } from '@croixbleue/devops.devops-console.authentications.authentication-oidc';

export type DevopsConsoleAppProps = {};

const baseUrl = 'http://localhost:5000/api/v2';

const cdStatusUrl = (name: string) => `${baseUrl}/sccs/repositories/${name}/cd?plugin_id=cbq`;

export function DevopsConsoleAppExample({}: DevopsConsoleAppProps) {
  const [stateAuth, dispatch] = useContext(AuthenticationStateContext);
  const { imBusy, imNotBusy, busy } = useBusyIndicator();

  const [repositories, setRepositories] = useState<RepositoryDefinition[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<RepoStatus | null>(null);

  const [projects, setProjects] = useState<ProjectMap>({});
  const [selectedProject, setSelectedProject] = useState<string>('');

  // fetch list of repos and projects on mount
  useEffect(() => {
    Promise.all([
      fetchAndSet(`${baseUrl}/sccs/repositories?plugin_id=cbq`, setRepositories),
      fetchAndSet(`${baseUrl}/sccs/projects`, setProjects),
    ]);
  }, []);

  const handleSearch = (repoIdx: number | null) => {
    if (repoIdx === null) {
      setSelectedRepo(null);
      return;
    }
    const definition = repositories[repoIdx];

    fetchAndSet<CdStatus>(cdStatusUrl(definition.name)).then((cdStatus) => {
      setSelectedRepo({ definition, cdStatus });
    });
  };

  const handleProjectChange = (projectKey: string) => {
    if (projectKey === '') {
      setSelectedProject('');
      return;
    }

    const project = projects[projectKey];

    Promise.all(project.repositories.map((repo) => fetchAndSet<CdStatus>(cdStatusUrl(repo)))).then(
      (cdStatuses) => {}
    );
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: '1em', flexGrow: 1 }}>
        <HeaderBar
          appName="DevOps Console"
          projects={projects}
          repositories={repositories}
          onSearch={handleSearch}
        >
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
      {!busy && !!selectedRepo && <RepositoryBitbucket status={selectedRepo} />}
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

  function fetchAndSet<T>(url: string, setFn: ((d: T) => void) | null = null): Promise<T> {
    imBusy();
    return fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Error ${response.status} ${response.statusText} for ${url}`);
      })
      .then((data) => {
        if (setFn !== null) {
          setFn(data);
        }
        return data;
      })
      .catch((e) => console.error(e))
      .then((data) => data as T)
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
