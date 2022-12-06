import { ReactAppOptions } from '@teambit/react';

export const AppApp: ReactAppOptions = {
  name: 'app',
  entry: [require.resolve('./app.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default AppApp;
