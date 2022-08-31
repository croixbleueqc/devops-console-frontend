import React, { ReactNode, useContext } from 'react';
import { AuthenticationContext } from '../../authentications/authentication/authentication-context';
import { HeaderBar } from '../../ui/header-bar/header-bar';

export type DevopsConsoleAppProps = {
    children?: ReactNode;
};

export function DevopsConsoleApp({ children }: DevopsConsoleAppProps) {
    const authState = useContext(AuthenticationContext);

    return (
        <div>
            {children}
            <HeaderBar appName={'DevOps Console'} userIsConnected={authState.isConnected} />
        </div>
    );
}
