import React, { ReactNode, useContext } from 'react';

import { GlobalStateProvider } from '@croixbleue/devops.devops-console.global-state';
import { HeaderBar } from '@croixbleue/devops.devops-console.ui.header-bar';
import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
import { AuthenticationOidc } from '@croixbleue/devops.devops-console.authentications.authentication-oidc';

export type DevopsConsoleAppProps = {
    children?: ReactNode;
};

export function DevopsConsoleAppExample({ children }: DevopsConsoleAppProps) {
    const [stateAuth] = useContext(AuthenticationStateContext);

    return (
        <div>
            {children}
            <HeaderBar appName={'DevOps Console'} userIsConnected={stateAuth.isConnected}>
                <AuthenticationOidc />
            </HeaderBar>
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
