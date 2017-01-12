// @flow
/**
 * PROBLEM:
 * `isomorphic-fetch`, which uses `node-fetch`, requires absolute URL. When running specs using
 * relative URL, the following error is thrown: "only absolute urls are supported".
 *
 * SOLUTION:
 * To fix this, create a fake server and initialize `nock` using that server.
 */
import nock from 'nock';

// fake server
export const server = 'http://test-server';

// this is needed to ensure `src/js/common/utils/url-helper.js` generates the URL with the
// server prefix
process.env.CONTEXT_ROOT = server;

// return `nock` with fake server
export default nock(server);
