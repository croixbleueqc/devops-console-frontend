import React from 'react';
import { render } from '@testing-library/react';
import { BasicK8sDeploymentView } from './k8s-deployment-view.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicK8sDeploymentView />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
