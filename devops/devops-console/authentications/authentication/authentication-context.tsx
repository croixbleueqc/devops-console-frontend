import { createContext } from 'react';

export type AuthenticationContextType = {
    /**
     * primary color of theme.
     */
    isConnected: boolean;
};

export const AuthenticationContext = createContext<AuthenticationContextType>({
    isConnected: false,
});
