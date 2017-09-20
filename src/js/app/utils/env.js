// @flow
/**
 * Handles injected global values from Webpack's DefinePlugin.
 */
type Env = {
  getNodeEnv: Function,
  getContextRoot: Function,
  getAppName: Function,
  getVersion: Function,
  isProduction: Function,
};

const env: Env = {
  getNodeEnv: (): ?string => process.env.NODE_ENV,
  getContextRoot: (): ?string => process.env.CONTEXT_ROOT,
  getAppName: (): ?string => process.env.APP_NAME,
  getVersion: (): ?string => process.env.VERSION,
  isProduction: (): boolean => process.env.NODE_ENV === 'production',
};

export default env;
