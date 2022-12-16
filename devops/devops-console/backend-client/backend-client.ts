import {
  CdStatus,
  K8sDeploymentStatus,
  ProjectConfig,
  ProjectMap,
  RepositoryDescription,
  RepoStatus,
} from '@croixbleue/devops.devops-console.types';

const username = process.env.BB_USERNAME;
const apikey = process.env.BB_APIKEY;

export const baseHeaders = {
  'x-plugin-id': 'cbq',
  'x-apikey': apikey ?? '',
  'x-username': username ?? '',
};

/** not a cache, just used to share results within the scope of BackendClient */
type StupidStore = {
  repoDefinitions?: RepositoryDescription[];
  projects?: ProjectMap;
};

export class BackendClient {
  baseUrl: string;

  store: StupidStore = {};

  baseOptions: RequestInit = {
    headers: baseHeaders,
  };

  private static instance: BackendClient;

  private constructor(
    host: string = 'http://localhost',
    port: number = 5000,
    apiPath: string = '/api/v2',
    options: RequestInit = {}
  ) {
    this.baseUrl = `${host}:${port}`;
    if (apiPath != null) {
      this.baseUrl = `${this.baseUrl}/${apiPath}`;
    }

    this.baseOptions = { ...this.baseOptions, ...options };
  }

  public static getInstance(
    host: string = 'http://localhost',
    port: number = 5000,
    apiPath: string = '/api/v2'
  ): BackendClient {
    if (!BackendClient.instance) {
      BackendClient.instance = new BackendClient(host, port, apiPath);
    }
    return BackendClient.instance;
  }

  async fetch(path: string, options?: RequestInit): Promise<any> {
    return fetch(`${this.baseUrl}${path}`, options).then((res) => res.json());
  }

  async getRepoDefinitions(): Promise<RepositoryDescription[]> {
    const definitions = (await this.fetch('/sccs/repositories')) as RepositoryDescription[];
    // cache the result for reuse later
    this.store.repoDefinitions = definitions;
    return definitions;
  }

  async getProjects(): Promise<ProjectMap> {
    const projects = (await this.fetch('/projects')) as ProjectMap;
    this.store.projects = projects;
    return projects;
  }

  async getProjectConfig(projectKey: string): Promise<ProjectConfig> {
    if (this.store.projects == null) await this.getProjects();
    const project = this.store.projects![projectKey];
    if (project == null) throw new Error(`No project found for name ${projectKey}`);
    return project;
  }

  async getCdStatus(repoName: string): Promise<CdStatus> {
    return (await this.fetch(`/sccs/repositories/${repoName}/cd`)) as CdStatus;
  }

  async getK8sDeploymentStatus(
    repoName: string,
    environment: string
  ): Promise<K8sDeploymentStatus> {
    return (await this.fetch(
      `/k8s/deployment-status/${repoName}/${environment}}`
    )) as K8sDeploymentStatus;
  }

  async getRepoStatus(repoName: string): Promise<RepoStatus> {
    if (this.store.repoDefinitions == null) await this.getRepoDefinitions();
    const definition = this.store.repoDefinitions!.find((r) => r.name === repoName);
    if (definition == null) throw new Error(`No definition found for repository ${repoName}`);

    const cdStatus = await this.getCdStatus(repoName);
    const k8sStatus = await Promise.all(
      cdStatus.map(({ environment }) => this.getK8sDeploymentStatus(repoName, environment))
    );

    return { definition, cdStatus, k8sStatus } as RepoStatus;
  }
}

export const defaultClient = BackendClient.getInstance();
