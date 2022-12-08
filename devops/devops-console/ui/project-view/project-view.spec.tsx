import React from 'react';
import { render } from '@testing-library/react';
import { BasicProjectView } from './project-view.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProjectView />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
