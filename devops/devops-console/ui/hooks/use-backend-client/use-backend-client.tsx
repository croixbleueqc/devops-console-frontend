import { useBusyIndicator } from '@croixbleue/devops.devops-console.ui.hooks.use-busy-indicator';
import { defaultClient } from '@croixbleue/devops.devops-console.backend-client';

export function useBackendClient() {
  const { imBusy, imNotBusy } = useBusyIndicator();
  // wrap all methods of the backend client with calls to imBusy and imNotBusy
  const client = new Proxy(defaultClient, {
    get(target, propKey, receiver) {
      const originalMethod = Reflect.get(target, propKey, receiver);
      return async (...args: any) => {
        imBusy();
        try {
          return await originalMethod(...args);
        } finally {
          imNotBusy();
        }
      };
    },
  });
  return { client };
}
