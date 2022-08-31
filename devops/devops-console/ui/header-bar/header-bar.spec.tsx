import React from 'react';
import { render } from '@testing-library/react';
import { BasicHeaderBar, CustomContentHeaderBar } from './header-bar.composition';

it('should render with the correct text', () => {
    const { getByText } = render(<BasicHeaderBar />);
    const rendered = getByText('DevOps Console');
    expect(rendered).toBeTruthy();
});

it('should render with the correct text', () => {
    const { getByText } = render(<CustomContentHeaderBar />);
    const rendered = getByText('DevOps Console');
    const badgeNotificationNumber = getByText('17');
    expect(rendered).toBeTruthy();
    expect(badgeNotificationNumber).toBeTruthy();
});
