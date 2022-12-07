import React from 'react';
import { render } from '@testing-library/react';
import { BasicRepositoryBitbucket } from './repository-bitbucket.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRepositoryBitbucket />);
  const rendered = getByText('Example Repo');
  expect(rendered).toBeTruthy();
});
