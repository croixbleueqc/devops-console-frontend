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
};

export type CdEnvironment = {
  environment: string;
  version: string;
  readonly: boolean;
  pullrequest?: string;
};

export type CdStatus = CdEnvironment[];

export type RepoStatus = { definition: RepositoryDefinition; cdStatus: CdStatus };

export type K8sStatus = any; // TODO
