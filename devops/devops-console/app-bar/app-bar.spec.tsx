import React from 'react';
import { render } from '@testing-library/react';
import { BasicAppBar, CustomContentAppBar } from './app-bar.composition';

it('should render with the correct text', () => {
    const { getByText } = render(<BasicAppBar />);
    const rendered = getByText('DevOps Console');
    expect(rendered).toBeTruthy();
});

it('should render with the correct text', () => {
    const { getByText } = render(<CustomContentAppBar />);
    const rendered = getByText('DevOps Console');
    const badgeNotificationNumber = getByText('17');
    expect(rendered).toBeTruthy();
    expect(badgeNotificationNumber).toBeTruthy();
});
