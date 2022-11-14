import React, { ReactNode, useReducer } from 'react';

import {
  AuthenticationStateContext,
  AuthenticationStateContextType,
} from './authentication-state-context';

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

const reducer = (state, action) => {
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
};

export function AuthenticationStateProvider({
  defaultState = {},
  children,
}: AuthenticationStateProviderProps) {
  // eslint-disable-next-line no-spaced-func
  const [state, dispatch] = useReducer<
    (state: AuthenticationStateContextType, action: any) => AuthenticationStateContextType
  >(reducer, defaultState);

  return (
    <AuthenticationStateContext.Provider value={[{ ...state }, dispatch]}>
      {children}
    </AuthenticationStateContext.Provider>
  );
}
