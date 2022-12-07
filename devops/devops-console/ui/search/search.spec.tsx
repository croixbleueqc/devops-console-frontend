import React from 'react';
import { render } from '@testing-library/react';
import { BasicSearch } from './search.composition';

it('should render with the correct text', () => {
  const { getByTestId } = render(<BasicSearch />);
  const rendered = getByTestId('test-search');
  expect(rendered).toBeTruthy();
});
