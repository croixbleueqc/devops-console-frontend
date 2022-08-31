import React, { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export type HeaderBarProps = {
    userIsConnected: boolean;
    appName?: string;
    children?: ReactNode;
};

export function HeaderBar({ appName, children, userIsConnected }: HeaderBarProps) {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <Menu />
                </IconButton>
                {appName ? (
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {appName}
                    </Typography>
                ) : null}
                {children}
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-headerbar"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                {userIsConnected ? 'Connected' : 'Disconnected'}
            </Toolbar>
        </AppBar>
    );
}
