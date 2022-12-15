import { Pod } from '@croixbleue/devops.devops-console.types';
import React from 'react';
import { PodsView } from './pod-view';

export const BasicPodView = () => {
  const pod: Pod = {
    name: 'pod1',
    containers: [
      {
        name: 'container1',
        ready: true,
        restartCount: 0,
      },
      {
        name: 'container2',
        ready: false,
        restartCount: 1,
      },
    ],
  };
  return <PodsView pods={pod} />;
};
