import React, { useContext } from 'react';
import { AuthenticationProvider, AuthenticationProviderProps } from './authentication-context-provider';
import { AuthenticationContext } from './authentication-context';

export function MockComponent() {
    const authState = useContext(AuthenticationContext);

    return <div>User is connected: {authState.isConnected ? 'yes' : 'no'}</div>;
}

export const BasicAuthState = () => {
    const defaultState: AuthenticationProviderProps['defaultState'] = {
        isConnected: false,
    };
    return (
        <AuthenticationProvider defaultState={defaultState}>
            <MockComponent />
        </AuthenticationProvider>
    );
};
