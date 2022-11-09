import React, { ReactNode } from 'react';
import { useReducer } from 'react';
import { AuthenticationStateContext, AuthenticationStateContextType } from './authentication-state-context';

export type AuthenticationStateProviderProps = {
    /**
     * primary color of theme.
     */
    defaultState?: AuthenticationStateContextType;

    /**
     * children to be rendered within this theme.
     */
    children: ReactNode;
};

export function AuthenticationStateProvider({ defaultState = {}, children }: AuthenticationStateProviderProps) {
    const [state, dispatch] = useReducer<
        (state: AuthenticationStateContextType, action: any) => AuthenticationStateContextType
    >((state, action) => {
        switch (action.type) {
            case 'showAuth':
                return { ...state, displayAuth: true };

            case 'hideAuth':
                return { ...state, displayAuth: false };

            case 'markAsConnected':
                return { ...state, isConnected: true };

            case 'markAsUnconnected':
                return { ...state, isConnected: false };

            default:
                return state;
        }
    }, defaultState);

    return (
        <AuthenticationStateContext.Provider value={[{ ...state }, dispatch]}>
            {children}
        </AuthenticationStateContext.Provider>
    );
}
