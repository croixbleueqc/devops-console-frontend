import React from 'react';
import { render } from '@testing-library/react';
import { JsonReadOnly } from './json-editor.composition';

it('should render', () => {
  const { getByTestId } = render(<JsonReadOnly />);
  const rendered = getByTestId('json-editor');
  expect(rendered).toBeTruthy();
});
