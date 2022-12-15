import React from 'react';
import { render } from '@testing-library/react';
import { BasicRepository } from './repository.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRepository />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
