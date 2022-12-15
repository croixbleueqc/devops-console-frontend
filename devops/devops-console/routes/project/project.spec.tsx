import React from 'react';
import { render } from '@testing-library/react';
import { BasicProject } from './project.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProject />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
