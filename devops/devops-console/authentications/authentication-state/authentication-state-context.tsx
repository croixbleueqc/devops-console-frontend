import { createContext } from 'react';

export type AuthenticationStateContextType = {
  isConnected?: boolean;
  displayAuth?: boolean;
};

export const AuthenticationStateContext = createContext<
  [AuthenticationStateContextType, React.Dispatch<any>]
>([
  {
    isConnected: false,
    displayAuth: false,
  },
  () => undefined,
]);
