import React from 'react';
import { render } from '@testing-library/react';
import { BasicAuthState } from './authentication-state-context.composition';

it('should render unconnected status of user', () => {
  const { getByText } = render(<BasicAuthState />);
  const rendered = getByText('User is connected: no');
  expect(rendered).toBeTruthy();
});
