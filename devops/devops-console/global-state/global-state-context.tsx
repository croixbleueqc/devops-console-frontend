import { createContext } from 'react';

export type GlobalStateContextType = {
  theme: 'light' | 'dark';
  backendUrl?: string;
  openApiUrl?: string;
};

export const GlobalStateContext = createContext<GlobalStateContextType>({
  theme: 'light',
});
