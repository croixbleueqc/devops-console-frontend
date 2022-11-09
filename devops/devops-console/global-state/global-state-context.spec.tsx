import React from 'react';
import { render } from '@testing-library/react';

import { BasicThemeUsage } from './global-state-context.composition';

it('should render the button in the color blue', () => {
    const { getByText } = render(<BasicThemeUsage />);
    const rendered = getByText('this should be blue');
    expect(rendered).toBeTruthy();
});
