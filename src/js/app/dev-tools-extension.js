/**
 * Enabling Redux DevTools.
 *
 * See https://github.com/zalmoxisus/redux-devtools-extension
 */
export default () => (
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() :
    f => f
);
