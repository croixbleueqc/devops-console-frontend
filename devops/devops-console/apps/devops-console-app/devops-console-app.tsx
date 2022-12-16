import { GlobalStateProvider } from '@croixbleue/devops.devops-console.global-state';
import { router } from '@croixbleue/devops.devops-console.router';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

export type DevopsConsoleAppProps = {};

export function DevopsConsoleApp() {
  return (
    <GlobalStateProvider>
      <RouterProvider router={router} />
    </GlobalStateProvider>
  );
}
