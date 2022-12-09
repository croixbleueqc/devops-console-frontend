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
import { ProjectView } from '@croixbleue/devops.devops-console.ui.project-view';
// import { AuthenticationOidc } from '@croixbleue/devops.devops-console.authentications.authentication-oidc';

// TODO extract to a configuration module
const baseUrl = 'http://localhost:5000/api/v2';
const cdStatusUrl = (name: string) => `${baseUrl}/sccs/repositories/${name}/cd?plugin_id=cbq`;

export type DevopsConsoleAppProps = {};

export function DevopsConsoleAppExample({}: DevopsConsoleAppProps) {
  const [stateAuth, dispatch] = useContext(AuthenticationStateContext);
  const { imBusy, imNotBusy, busy } = useBusyIndicator();

  const [repositoryDefinitions, setRepositoryDefinitions] = useState<RepositoryDefinition[]>([]);
  const [projects, setProjects] = useState<ProjectMap>({});

  const [selectedRepoIdx, setSelectedRepoIdx] = useState<number | null>(null);
  const [selectedProjectKey, setSelectedProjectKey] = useState<string>('');

  const [repoSelection, setRepoSelection] = useState<RepoStatus[] | null>(null);

  // fetch list of repos and projects on mount
  useEffect(() => {
    Promise.all([
      fetchAndSet(`${baseUrl}/sccs/repositories?plugin_id=cbq`, setRepositoryDefinitions),
      fetchAndSet(`${baseUrl}/sccs/projects`, setProjects),
    ]);
  }, []);

  const handleSearch = (repoIdx: number | null) => {
    setSelectedProjectKey('');
    setSelectedRepoIdx(repoIdx);
  };

  const handleProjectChange = (projectKey: string) => {
    setSelectedRepoIdx(null);
    setSelectedProjectKey(projectKey);
  };

  useEffect(() => {
    if (selectedRepoIdx == null) {
      return;
    }
    const definition = repositoryDefinitions[selectedRepoIdx];
    fetchAndSet<CdStatus>(cdStatusUrl(definition.name)).then((cdStatus) => {
      setRepoSelection([{ definition, cdStatus }]);
    });
  }, [selectedRepoIdx]);

  useEffect(() => {
    if (selectedProjectKey == '') {
      return;
    }
    const project = projects[selectedProjectKey];

    Promise.all(project.repositories.map((repo) => fetchAndSet<CdStatus>(cdStatusUrl(repo)))).then(
      (cdStatuses) => {
        const repoStatuses = cdStatuses.map((cd, idx) => {
          const definition = repositoryDefinitions.find((r) => r.name == project.repositories[idx]);
          if (!definition) {
            throw new Error(`Repository ${project.repositories[idx]} not found`);
          }
          return { definition, cdStatus: cd } as RepoStatus;
        });

        setRepoSelection(repoStatuses);
      }
    );
  }, [selectedProjectKey]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: '1em', flexGrow: 1 }}>
        <HeaderBar
          appName="🌌 DevOps Console"
          projects={projects}
          repositories={repositoryDefinitions}
          selectedProjectKey={selectedProjectKey}
          selectedRepoIdx={selectedRepoIdx}
          onSearch={handleSearch}
          onProjectChange={handleProjectChange}
          navigation={/*TODO*/ null}
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
      {!busy &&
        !!repoSelection &&
        (selectedRepoIdx != null ? (
          <RepositoryBitbucket status={repoSelection[0]} />
        ) : selectedProjectKey != '' ? (
          <ProjectView projectConfig={projects[selectedProjectKey]} repoSelection={repoSelection} />
        ) : null)}
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
