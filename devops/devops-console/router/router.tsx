import { Error } from '@croixbleue/devops.devops-console.routes.error';
import { Home, homeLoader } from '@croixbleue/devops.devops-console.routes.home';
import { Project, projectLoader } from '@croixbleue/devops.devops-console.routes.project';
import {
  ProjectSettings,
  projectSettingsLoader,
} from '@croixbleue/devops.devops-console.routes.project-settings';
import { Root, rootLoader } from '@croixbleue/devops.devops-console.routes.root';
import {
  UserSettings,
  userSettingsLoader,
} from '@croixbleue/devops.devops-console.routes.user-settings';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Repository, repositoryLoader } from '../routes/repository';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    errorElement: <Error />,
    children: [
      { path: '', element: <Home />, loader: homeLoader },
      {
        path: 'repository/:slug',
        element: <Repository />,
        loader: repositoryLoader,
      },
      {
        path: 'project/:key',
        element: <Project />,
        loader: projectLoader,
      },
      {
        path: 'settings/projects/:key',
        element: <ProjectSettings />,
        loader: projectSettingsLoader,
      },
      {
        path: 'settings/user',
        element: <UserSettings />,
        loader: userSettingsLoader,
      },
    ],
  },
]);
