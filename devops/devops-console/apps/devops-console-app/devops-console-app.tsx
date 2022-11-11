import React, { ReactNode, useContext } from 'react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PowerOffIcon from '@mui/icons-material/PowerOff';

import { GlobalStateProvider } from '@croixbleue/devops.devops-console.global-state';
import { HeaderBar } from '@croixbleue/devops.devops-console.ui.header-bar';
import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
import { AuthenticationOidc } from '@croixbleue/devops.devops-console.authentications.authentication-oidc';

export type DevopsConsoleAppProps = {
  children?: ReactNode;
};

export function DevopsConsoleAppExample({ children }: DevopsConsoleAppProps) {
  const [stateAuth, dispatch] = useContext(AuthenticationStateContext);

  return (
    <div>
      <HeaderBar appName="DevOps Console">
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
      <div>
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
      </div>
    </div>
  );
}

export function DevopsConsoleApp({ children }: DevopsConsoleAppProps) {
  return (
    <GlobalStateProvider>
      <DevopsConsoleAppExample>{children}</DevopsConsoleAppExample>
    </GlobalStateProvider>
  );
}
