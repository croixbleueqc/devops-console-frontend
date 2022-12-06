import React, { ChangeEventHandler, ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import { Search } from '@croixbleue/devops.devops-console.ui.search';

export type HeaderBarProps = {
  appName?: string;
  children?: ReactNode;
  searchOptions?: { label: string; value: string }[];
  searchFn: (value: string) => void;
};

export function HeaderBar({ appName, searchOptions, searchFn, children }: HeaderBarProps) {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Menu />
        </IconButton>
        {appName ? (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {appName}
          </Typography>
        ) : null}
        <Search options={searchOptions} handleChange={searchFn} />
        {children}
      </Toolbar>
    </AppBar>
  );
}
