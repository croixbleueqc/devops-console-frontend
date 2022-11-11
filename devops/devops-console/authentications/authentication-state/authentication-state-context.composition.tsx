import React, { useContext } from 'react';
import { AuthenticationStateProvider, AuthenticationStateProviderProps } from './authentication-state-context-provider';
import { AuthenticationStateContext } from './authentication-state-context';

export function MockComponent() {
    const authState = useContext(AuthenticationStateContext);

    return <div>User is connected: {authState[0].isConnected ? 'yes' : 'no'}</div>;
}

export const BasicAuthState = () => {
    return (
        <AuthenticationStateProvider>
            <MockComponent />
        </AuthenticationStateProvider>
    );
};
