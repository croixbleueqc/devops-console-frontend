import React from 'react';
import { render } from '@testing-library/react';
import { BasicProjectSettings } from './project-settings.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicProjectSettings />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
