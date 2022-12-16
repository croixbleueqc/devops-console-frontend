import React, { useContext, useEffect, useState } from 'react';

import AccountCircle from '@mui/icons-material/AccountCircle';
import PowerOffIcon from '@mui/icons-material/PowerOff';
import { Box, Container, LinearProgress } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
import { ProjectMap, RepositoryDescription } from '@croixbleue/devops.devops-console.types';
import { HeaderBar } from '@croixbleue/devops.devops-console.ui.header-bar';
import { Outlet, useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { defaultClient } from '@croixbleue/devops.devops-console.backend-client';
import { useBusyIndicator } from '@croixbleue/devops.devops-console.ui.hooks.use-busy-indicator';
// import { AuthenticationOidc } from '@croixbleue/devops.devops-console.authentications.authentication-oidc';

export async function rootLoader() {
  const [definitions, projects] = await Promise.all([
    defaultClient.getRepoDefinitions(),
    defaultClient.getProjects(),
  ]);
  return { repositoryDefinitions: definitions, projects };
}

export function Root() {
  const { busy } = useBusyIndicator();
  const [stateAuth, dispatch] = useContext(AuthenticationStateContext);
  const { repositoryDefinitions, projects } = useLoaderData() as {
    repositoryDefinitions: RepositoryDescription[];
    projects: ProjectMap;
  };

  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading' || busy;

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: '1em', flexGrow: 1 }}>
        <HeaderBar
          appName="🌌 DevOps Console"
          projects={projects}
          repositories={repositoryDefinitions}
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
        {isLoading && <LinearProgress />}
      </Box>
      <div id="content">
        <Outlet />
      </div>
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
