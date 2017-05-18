// @flow
/**
 * Global setup before running any specs.
 */
import 'babel-polyfill';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;
global.navigator = global.window.navigator;

global.window.matchMedia = () => ({
  matches: false,
  addListener() {
  },
  removeListener() {
  }
});
