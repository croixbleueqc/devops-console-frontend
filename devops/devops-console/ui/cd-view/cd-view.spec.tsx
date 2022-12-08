import React from 'react';
import { render } from '@testing-library/react';
import { BasicCdView } from './cd-view.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCdView />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
