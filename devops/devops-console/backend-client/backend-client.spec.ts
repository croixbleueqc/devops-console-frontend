import { baseHeaders } from './backend-client';

describe('BackendClient', () => {
  it('should load env vars', () => {
    expect(baseHeaders['x-username']).toBeTruthy();
    expect(baseHeaders['x-apikey']).toBeTruthy();
  });
});
