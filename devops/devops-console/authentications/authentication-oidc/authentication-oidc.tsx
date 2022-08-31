import React, { ReactNode } from 'react';
import {
    AuthenticationProvider,
    AuthenticationProviderProps,
} from '@croixbleue/devops.devops-console.authentications.authentication';

export type AuthenticationOidcProps = {
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
};

export function AuthenticationOidc({ children }: AuthenticationOidcProps) {
    const defaultState: AuthenticationProviderProps['defaultState'] = {
        isConnected: false,
    };
    return (
        <AuthenticationProvider defaultState={defaultState}>
            <div>{children}</div>
        </AuthenticationProvider>
    );
}
