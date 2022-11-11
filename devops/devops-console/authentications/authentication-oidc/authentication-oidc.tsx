import { AuthenticationStateContext } from '@croixbleue/devops.devops-console.authentications.authentication-state';
import React, { PropsWithChildren, useContext } from 'react';

export type AuthenticationOidcProps = PropsWithChildren<{}>;

export function AuthenticationOidc() {
  const [state, dispatch] = useContext(AuthenticationStateContext);

  if (state.displayAuth) {
    return state.isConnected ? (
      <span>
        Unconnected user from header bar top right button{' '}
        <span role="img" aria-label="tumb eomji">
          👍
        </span>
      </span>
    ) : (
      <button
        type="button"
        onClick={() => {
          dispatch({ type: state.isConnected ? 'markAsUnconnected' : 'markAsConnected' });
        }}
      >
        Mark user as connected
      </button>
    );
  }
  return null;
}
