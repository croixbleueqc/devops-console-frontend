import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
import React, { PropsWithChildren, useContext } from 'react';

export type AuthenticationOidcProps = PropsWithChildren<{}>;

export function AuthenticationOidc({ children }: AuthenticationOidcProps) {
  const [state, dispatch] = useContext(AuthenticationStateContext);

  return state.displayAuth ? (
    <button
      type="button"
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
