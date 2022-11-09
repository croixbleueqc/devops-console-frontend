import React, { ReactNode } from 'react';

import { AuthenticationStateProvider } from '@croixbleue/devops.devops-console.authentications.authentication-state';

import { GlobalStateContext } from './global-state-context';

export type GlobalStateProviderProps = {
    /**
     * primary color of theme.
     */
    color?: string;

    /**
     * children to be rendered within this theme.
     */
    children: ReactNode;
};

export function GlobalStateProvider({ color, children }: GlobalStateProviderProps) {
    return (
        <GlobalStateContext.Provider value={{ color }}>
            <AuthenticationStateProvider>{children}</AuthenticationStateProvider>
        </GlobalStateContext.Provider>
    );
}
