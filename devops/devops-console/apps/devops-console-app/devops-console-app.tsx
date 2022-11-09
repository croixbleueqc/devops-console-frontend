import React, { ReactNode, useContext } from 'react';

import { GlobalStateProvider } from '@croixbleue/devops.devops-console.global-state';
import { HeaderBar } from '@croixbleue/devops.devops-console.ui.header-bar';
import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
import { AuthenticationOidc } from '@croixbleue/devops.devops-console.authentications.authentication-oidc';

export type DevopsConsoleAppProps = {
    children?: ReactNode;
};

export function DevopsConsoleAppExample({ children }: DevopsConsoleAppProps) {
    const [stateAuth, dispatchAuth] = useContext(AuthenticationStateContext);

    return (
        <div>
            {children}
            <HeaderBar appName={'DevOps Console'} userIsConnected={stateAuth.isConnected}>
                <button onClick={() => dispatchAuth({ type: 'showAuth' })}>Switch auth status</button>
                <AuthenticationOidc />
            </HeaderBar>
        </div>
    );
}

export function DevopsConsoleApp({ children }: DevopsConsoleAppProps) {
    return (
        <GlobalStateProvider>
            {children}
            <DevopsConsoleAppExample />
        </GlobalStateProvider>
    );
}
