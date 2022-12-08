import { CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useBusyIndicator } from './use-busy-indicator';

export const BasicuseBusyIndicator = () => {
  const { imBusy, imNotBusy, busy, tasks } = useBusyIndicator();
  const [busy1, setBusy1] = useState(false);
  const [busy2, setBusy2] = useState(false);

  const startTask = (setter: (b: boolean) => void) => {
    setter(true);
    imBusy();
    setTimeout(() => {
      setter(false);
      imNotBusy();
    }, 5000);
  };

  return (
    <>
      <div style={{ marginBottom: '2em' }}>
        Busy indicator is{' '}
        {busy ? (
          <span style={{ color: 'red' }}>busy</span>
        ) : (
          <span style={{ color: 'green' }}>not busy</span>
        )}{' '}
        with {tasks || 'any'} tasks.
      </div>
      <button type="button" style={{ minWidth: '18ch' }} onClick={() => startTask(setBusy1)}>
        {busy1 ? <CircularProgress size="1em" /> : 'Start task 1...'}
      </button>
      <button type="button" style={{ minWidth: '18ch' }} onClick={() => startTask(setBusy2)}>
        {busy2 ? <CircularProgress size="1em" /> : 'Start task 2...'}
      </button>
    </>
  );
};
