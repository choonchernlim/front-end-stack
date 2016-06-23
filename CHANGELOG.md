# Change Log

## 0.3.2- 2016-06-23

* Allowed user to override context root when running the production build: `CONTEXT_ROOT=/new-context-root npm run build`.

## 0.3.1- 2016-06-22

* Changed `import { describe, it } from 'mocha';` to `const { describe, it } = global;` to allow `mocha --watch` to work. See https://github.com/mochajs/mocha/issues/1847.
* Dependency updates.
    * `history v3.0.0` doesn't work with `react-router`. See https://github.com/reactjs/react-router/issues/3515
* Git-ignored `dist/`.

## 0.3.0 - 2016-05-20

* `Invalid regular expression: /^\api\(.*)\/?$/: Unmatched ')'` with running `npm start` in Windows.
* Cross-platform compatible NPM script. Tested to work on Mac and Windows.
* Updated dependency versions.

## 0.2.0 - 2016-05-11

* Ported to `choonchernlim-archetype-webapp`.

## 0.1.0 - 2016-04-11

* Initial.
