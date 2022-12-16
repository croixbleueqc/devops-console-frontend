import React from 'react';
import { render } from '@testing-library/react';
import { BasicError } from './error.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicError />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
