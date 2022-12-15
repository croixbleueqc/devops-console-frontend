const user = process.env.BB_USER;
const username = user?.split(':')[0];
const apikey = user?.split(':')[1];

export const baseHeaders = {
  'x-plugin-id': 'cbq',
  'x-apikey': apikey ?? '',
  'x-username': username ?? '',
};

export class BackendClient {
  baseUrl: string;

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

  async fetch(path: string, options?: RequestInit) {
    return fetch(`${this.baseUrl}${path}`, options);
  }
}

export const defaultClient = BackendClient.getInstance();
