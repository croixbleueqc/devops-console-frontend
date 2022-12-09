import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';

export type PageTitleProps = {
  children?: ReactNode;
};

export function PageTitle({ children }: PageTitleProps) {
  return (
    <Typography variant="h3" gutterBottom>
      {children}
    </Typography>
  );
}
