import React from 'react';
import { render } from '@testing-library/react';
import { BasicDevopsConsoleApp } from './devops-console-app.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDevopsConsoleApp />);
  const rendered = getByText('DevOps Console');
  expect(rendered).toBeTruthy();
});
