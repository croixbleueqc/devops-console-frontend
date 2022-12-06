import React from 'react';
import { render } from '@testing-library/react';
import { BasicSearch } from './search.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSearch />);
  const rendered = getByText('Search...');
  expect(rendered).toBeTruthy();
});
