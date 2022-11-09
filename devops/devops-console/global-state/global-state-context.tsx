import { createContext } from 'react';

export type GlobalStateContextType = {
  /**
   * primary color of theme.
   */
  color?: string;
};

export const GlobalStateContext = createContext<GlobalStateContextType>({
  color: 'aqua'
});
