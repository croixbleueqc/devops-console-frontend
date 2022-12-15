import React from 'react';
import { render } from '@testing-library/react';
import { BasicPodView } from './pod-view.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPodView />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
