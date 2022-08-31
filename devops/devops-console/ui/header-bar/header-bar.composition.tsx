import React from 'react';

import { HeaderBar } from './header-bar';
import { Badge } from '@mui/material';
import Notifications from '@mui/icons-material/Notifications';

export const BasicHeaderBar = () => {
    return <HeaderBar appName="DevOps Console" userIsConnected={false}></HeaderBar>;
};

export const CustomContentHeaderBar = () => {
    return (
        <div style={{ width: '100%' }}>
            <HeaderBar appName="DevOps Console" userIsConnected={true}>
                <Badge badgeContent={17} color="error">
                    <Notifications />
                </Badge>
            </HeaderBar>
        </div>
    );
};
