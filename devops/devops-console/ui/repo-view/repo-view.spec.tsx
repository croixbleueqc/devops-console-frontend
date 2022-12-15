import React from 'react';
import { render } from '@testing-library/react';
import { BasicRepoView } from './repo-view.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRepoView />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
