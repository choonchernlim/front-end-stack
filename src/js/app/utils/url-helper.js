// @flow
import env from './env';

/**
 * Removes trailing slash from context root.
 *
 * The default value is `process.env.CONTEXT_ROOT` injected using `webpack.DefinePlugin(..)`
 * if exists, otherwise blank string.
 *
 * @param contextRoot Context root
 * @return Context root without trailing slash
 */
export const sanitizeContextRoot = (contextRoot: ?string = env.getContextRoot()): string => (
  contextRoot ? contextRoot.replace(/\/$/, '') : ''
);

/**
 * Returns URL with context root prefix.
 *
 * Context root has to be dynamically determine to allow specs using `nock` to mock it out.
 *
 * @param uri URI
 * @return URL with context root prefix.
 */
export const url = (uri: string): string => sanitizeContextRoot() + uri;

export default {
  url,
  sanitizeContextRoot,
};
