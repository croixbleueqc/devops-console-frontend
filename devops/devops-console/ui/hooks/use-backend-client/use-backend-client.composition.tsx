import React from 'react';
import { useBackendClient } from './use-backend-client';

export const BasicuseBackendClient = () => {
  const { count, increment } = useBackendClient();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
