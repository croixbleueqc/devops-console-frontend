import React, { ReactNode } from 'react';
import { AuthenticationContext, AuthenticationContextType } from './authentication-context';

export type AuthenticationProviderProps = {
    /**
     * primary color of theme.
     */
    defaultState: AuthenticationContextType;

    /**
     * children to be rendered within this theme.
     */
    children: ReactNode;
};

export function AuthenticationProvider({ defaultState, children }: AuthenticationProviderProps) {
    return <AuthenticationContext.Provider value={{ ...defaultState }}>{children}</AuthenticationContext.Provider>;
}
