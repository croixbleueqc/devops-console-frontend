import React, { useContext } from 'react';
import { AuthenticationStateProvider } from './authentication-state-context-provider';
import { AuthenticationStateContext } from './authentication-state-context';

export function MockComponent() {
  const authState = useContext(AuthenticationStateContext);

  const isConnected = authState[0].isConnected ? 'yes' : 'no';
  return <div>User is connected: {isConnected}</div>;
}

export const BasicAuthState = () => (
  <AuthenticationStateProvider>
    <MockComponent />
  </AuthenticationStateProvider>
);
