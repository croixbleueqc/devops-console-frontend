import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppBar } from './app-bar.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAppBar />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
