import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppApp } from './app';

export const AppBasic = () => {
  return (
    <MemoryRouter>
      <AppApp />
    </MemoryRouter>
  );
};
