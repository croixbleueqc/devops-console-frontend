export type ProjectEnvironments = { enabled: boolean; name: string }[];

export type ProjectConfig = {
  name: string;
  repositories: string[];
  environments: ProjectEnvironments;
};

export type ProjectMap = {
  [key: string]: ProjectConfig;
};

export type RepositoryDescription = {
  name: string;
  slug: string;
  url: string;
  /** environment: a list of deployment environments where the repository is active */
  environment: string[];
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
  environment: string;
  namespace: string;
  cluster: string;
  permission: 'read' | 'write';
  pods: Pod[];
};

export type RepoStatus = {
  definition: RepositoryDescription;
  cdStatus: CdStatus;
  k8sStatus: K8sDeploymentStatus[];
};
