import { ReactAppOptions } from "@teambit/react";
import { netlify } from "./netlify";

export const ReactAppApp: ReactAppOptions = {
  name: "devops-console-demo",
  entry: [require.resolve("./devops-console-demo.app-root")],
  prerender: {
    routes: ["/"],
  },
  /* Sets netlify's 'deploy' as the deployment function for this React app */
  deploy: netlify.deploy.bind(netlify),
  favicon: require.resolve("./favicon.ico"),
};

export default ReactAppApp;
