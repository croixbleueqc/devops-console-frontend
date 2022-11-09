import React, { useContext } from 'react';
import { GlobalStateProvider } from './global-state-context-provider';
import { GlobalStateContext } from './global-state-context';

export function MockComponent() {
  const theme = useContext(GlobalStateContext);

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>;
}

export const BasicThemeUsage = () => {
  return (
    <GlobalStateProvider color="blue">
      <MockComponent />
    </GlobalStateProvider>
  );
};
