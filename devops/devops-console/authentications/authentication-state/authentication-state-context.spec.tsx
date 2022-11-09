import React from 'react';
import { BasicAuthState } from './authentication-state-context.composition';
import { render } from '@testing-library/react';

it('should render unconnected status of user', () => {
    const { getByText } = render(<BasicAuthState />);
    const rendered = getByText('User is connected: no');
    expect(rendered).toBeTruthy();
});
