// noinspection JSUnresolvedVariable
/**
 * By default, `.babelrc` requires "["es2015",{"modules": false}]" preset to prevent
 * modules to be converted into CommonJS modules so that "tree shaking" works when running
 * `npm run build` with Webpack 2, which supports `import` natively.
 *
 * However, with this configuration, `npm test` will fail with "Unexpected token import" error
 * because Node doesn't support `import` statement yet.
 *
 * To satisfy both scenarios, `.babelrc` includes this file, which will determine whether
 * `modules` will be set to `false` or `commonjs` based on NODE_ENV value. `npm test` will run
 * with `NODE_ENV=test` to ensure modules are converted into CommonJS modules first.
 *
 * See https://github.com/webpack/webpack/issues/2806
 */
module.exports = {
  presets: [
    [
      require('babel-preset-es2015').buildPreset,
      {
        modules: process.env.NODE_ENV === 'test' ? 'commonjs' : false,
      },
    ],
  ],
};
