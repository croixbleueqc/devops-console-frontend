import React from 'react';

import { Badge } from '@mui/material';
import Notifications from '@mui/icons-material/Notifications';

import { HeaderBar } from './header-bar';

export const BasicHeaderBar = () => <HeaderBar appName="DevOps Console" />;

export const CustomContentHeaderBar = () => (
  <div style={{ width: '100%' }}>
    <HeaderBar appName="DevOps Console">
      <Badge badgeContent={17} color="error">
        <Notifications />
      </Badge>
    </HeaderBar>
  </div>
);
