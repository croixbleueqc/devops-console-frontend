import React from 'react';

import { AppBar } from './app-bar';
import { Badge } from '@mui/material';
import Notifications from '@mui/icons-material/Notifications';

export const BasicAppBar = () => {
    return <AppBar appName="DevOps Console"></AppBar>;
};

export const CustomContentAppBar = () => {
    return (
        <div style={{ width: '100%' }}>
            <AppBar appName="DevOps Console">
                <Badge badgeContent={17} color="error">
                    <Notifications />
                </Badge>
            </AppBar>
        </div>
    );
};
