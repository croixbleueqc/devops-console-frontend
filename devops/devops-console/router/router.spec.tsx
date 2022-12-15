import React from 'react';
import { render } from '@testing-library/react';
import { BasicRouter } from './router.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRouter />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
