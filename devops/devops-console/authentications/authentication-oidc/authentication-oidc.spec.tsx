import React from 'react';
import { render } from '@testing-library/react';
import { BasicAuthenticationOidc } from './authentication-oidc.composition';
import { AuthenticationStateProvider } from '@croixbleue/devops.devops-console.authentications.authentication-state';

it('should render with the correct text', () => {
  const { getByText } = render(
    <AuthenticationStateProvider
      defaultState={{
        displayAuth: true,
      }}
    >
      <BasicAuthenticationOidc />
    </AuthenticationStateProvider>
  );
  const rendered = getByText('Mark user as connected');
  expect(rendered).toBeTruthy();
});
