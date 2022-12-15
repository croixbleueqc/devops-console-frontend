import React from 'react';
import { render } from '@testing-library/react';
import { BasicK8SDeploymentStatus } from './k8s-deployment-status.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicK8SDeploymentStatus />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
