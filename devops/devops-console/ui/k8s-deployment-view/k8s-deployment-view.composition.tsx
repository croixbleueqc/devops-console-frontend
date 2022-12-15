import { K8sDeploymentStatus } from '@croixbleue/devops.devops-console.types';
import React from 'react';
import { K8sDeploymentView } from './k8s-deployment-view';

const status: K8sDeploymentStatus = {
  namespace: 'namespace',
  cluster: 'cluster',
  permission: 'read',
  pods: [
    {
      name: 'pod1',
      containers: [
        {
          name: 'container0',
          ready: true,
          restartCount: 0,
        },
        {
          name: 'container1',
          ready: true,
          restartCount: 0,
        },
      ],
    },
    {
      name: 'pod2',
      containers: [
        {
          name: 'container0',
          ready: false,
          restartCount: 1,
        },
        {
          name: 'container1',
          ready: false,
          restartCount: 1,
        },
        {
          name: 'container2',
          ready: false,
          restartCount: 0,
        },
      ],
    },
    {
      name: 'pod3',
      containers: [
        { name: 'container0', ready: true, restartCount: 0 },
        { name: 'container1', ready: true, restartCount: 0 },
        { name: 'container2', ready: true, restartCount: 0 },
        { name: 'container3', ready: false, restartCount: 0 },
      ],
    },
  ],
};

export const BasicK8sDeploymentView = () => {
  return <K8sDeploymentView status={status} />;
};
