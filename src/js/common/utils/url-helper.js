/**
 * Removes trailing slash from context root.
 *
 * The default value is `process.env.CONTEXT_ROOT` injected using `webpack.DefinePlugin(..)`
 * if exists, otherwise blank string.
 *
 * @param contextRoot Context root
 * @return Context root without trailing slash
 */
export const sanitizeContextRoot = (contextRoot = process.env.CONTEXT_ROOT || '') => (
  contextRoot.replace(/\/$/, '')
);

/**
 * Returns URL with context root prefix.
 *
 * Context root has to be dynamically determine to allow specs using `nock` to mock it out.
 *
 npm te* @param uri URI
 * @return URL with context root prefix.
 */
export const url = uri => sanitizeContextRoot() + uri;

export default {
  url,
  sanitizeContextRoot
};
