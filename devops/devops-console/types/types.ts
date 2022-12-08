export type Project = {
  name: string;
  repositories: string[];
  environments: { enabled: boolean; name: string }[];
};

export type ProjectMap = {
  [key: string]: Project;
};

export type RepositoryDefinition = {
  name: string;
  slug: string;
  url: string;
};

export type CdStatus = Array<{
  environment: string;
  version: string;
  readonly: boolean;
  pullrequest?: string;
}>;

export type RepoStatus = { definition: RepositoryDefinition; cdStatus: CdStatus };

export type K8sStatus = any; // TODO
