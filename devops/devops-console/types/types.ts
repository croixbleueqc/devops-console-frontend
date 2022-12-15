import { ActionFunction, LoaderFunction, ShouldRevalidateFunction } from 'react-router-dom';

export type ProjectEnvironments = { enabled: boolean; name: string }[];

export type Project = {
  name: string;
  repositories: string[];
  environments: ProjectEnvironments;
};

export type ProjectMap = {
  [key: string]: Project;
};

export type RepositoryDefinition = {
  name: string;
  slug: string;
  url: string;
  remoteProvider?: 'bitbucket' | 'github';
};

export type CdEnvironment = {
  environment: string;
  version: string;
  readonly: boolean;
  pullrequest?: string;
};

export type CdStatus = CdEnvironment[];

export type ContainerStatus = {
  name: string;
  ready: boolean;
  restartCount: number;
};

export type Pod = {
  name: string;
  containers: ContainerStatus[];
};

export type K8sDeploymentStatus = {
  namespace: string;
  cluster: string;
  permission: 'read' | 'write';
  pods: Pod[];
};

export type RepoStatus = {
  definition: RepositoryDefinition;
  cdStatus: CdStatus;
  k8sStatus: K8sDeploymentStatus;
};
