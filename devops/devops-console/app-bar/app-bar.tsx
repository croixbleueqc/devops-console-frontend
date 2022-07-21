import React, { ReactNode } from 'react';
import { default as MuiAppBar } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export type AppBarProps = {
    appName?: string;
    /**
     * a node to be rendered in the special component.
     */
    children?: ReactNode;
};

export function AppBar({ appName, children }: AppBarProps) {
    return (
        <MuiAppBar position="static">
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
                {/* <Button color="inherit" sx={{ flexGrow: 1 }}>
                    Login
                </Button> */}
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </MuiAppBar>
    );
}
