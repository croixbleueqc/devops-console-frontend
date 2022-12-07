import React from 'react';
import { RepositoryBitbucket } from './repository-bitbucket';

export const BasicRepositoryBitbucket = () => (
  <RepositoryBitbucket
    definition={{ name: 'Example Repo', slug: 'example-repo', url: 'https://example.com' }}
    cd={[
      { environment: 'dev', version: '1234567890', readonly: false },
      { environment: 'staging', version: '1234567890', readonly: true },
      { environment: 'prod', version: '1234567890', readonly: true },
    ]}
  />
);
