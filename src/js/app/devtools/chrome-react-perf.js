// @flow
import env from '../utils/env';

/**
 * Enable Chrome React Perf by exposing `react-addons-perf` module as `Perf` global variable
 * in development mode.
 *
 * See https://github.com/facebook/react/issues/6174
 * See https://github.com/crysislinux/chrome-react-perf
 */
if (!env.isProduction()) {
  window.Perf = require('react-addons-perf'); // eslint-disable-line global-require, import/no-extraneous-dependencies
}
