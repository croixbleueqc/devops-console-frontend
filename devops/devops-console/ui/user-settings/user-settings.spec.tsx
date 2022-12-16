import React from 'react';
import { render } from '@testing-library/react';
import { BasicUserSettings } from './user-settings.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUserSettings />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
