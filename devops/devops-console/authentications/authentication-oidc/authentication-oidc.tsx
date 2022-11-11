import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
import React, { ReactNode } from 'react';
import { useContext } from 'react';

export type AuthenticationOidcProps = {
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
};

export function AuthenticationOidc({ children }: AuthenticationOidcProps) {
    const [state, dispatch] = useContext(AuthenticationStateContext);

    return state.displayAuth ? (
        <button
            onClick={() => {
                dispatch({ type: state.isConnected ? 'markAsUnconnected' : 'markAsConnected' });
                // dispatch({ type: 'hideAuth' });
            }}
        >
            Switch auth status
        </button>
    ) : (
        <div>{children}</div>
    );
}
