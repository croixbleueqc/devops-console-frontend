import React from 'react';
import { render } from '@testing-library/react';
import { BasicJsonEditor } from './json-editor.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicJsonEditor />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
