import { Netlify, NetlifyOptions } from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
    /* Your Netlify team slug (this can be modified in Netlify's 'Team settings') */
    team: 'devops-0obw44k',
    /*
     * Your Netlify authentication token. It's recommended to store the token it an env variable.
     * To learn how to manually generate a token, see:
     * https://docs.netlify.com/cli/get-started/#obtain-a-token-in-the-netlify-ui
     */
    accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
    /* Your Netlify site name. The site name below will have the following url:
     * https://devops-console-demo.netlify.app/
     */
    siteName: 'devops-console-demo',
    /* Do not set the index page as the fallback for missing pages? */
    doNotCatchAllToIndex: false,
};

/* Use this netlify instance in your app's plugin file */
export const netlify = new Netlify(netlifyConfig);
