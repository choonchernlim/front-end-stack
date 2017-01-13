// @flow
/**
 * Enable Chrome React Perf by exposing `react-addons-perf` module as `Perf` global variable
 * in development mode.
 *
 * See https://github.com/facebook/react/issues/6174
 * See https://github.com/crysislinux/chrome-react-perf
 */
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  window.Perf = require('react-addons-perf');
  /* eslint-enable global-require */
}
