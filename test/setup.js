import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;

global.window.matchMedia = () => ({
  matches: false,
  addListener() {
  },
  removeListener() {
  }
});
