import { HeaderBar } from '@croixbleue/devops.devops-console.ui.header-bar';
import { Container } from '@mui/material';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function AppApp() {
  return (
    <>
      {/* header component */}
      <Routes>
        <Route path="/">
          <>
            <Container maxWidth="lg">
              <HeaderBar appName="DevOps Console" />
            </Container>
          </>
        </Route>

        <Route path="/about">{/* about page component */}</Route>
      </Routes>
      {/* footer component */}
    </>
  );
}
