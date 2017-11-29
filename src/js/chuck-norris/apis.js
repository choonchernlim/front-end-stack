// @flow
import { type AjaxResponse } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

export const RANDOM_JOKE_SERVER = 'https://api.icndb.com';
export const RANDOM_JOKE_URI = '/jokes/random';

// One way to decode HTML
// See http://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
const decodeHtml = (html: string): string => {
  const element: HTMLTextAreaElement = window.document.createElement('textarea');
  element.innerHTML = html;
  return element.value;
};

const getJoke = () => ajax({
  url: RANDOM_JOKE_SERVER + RANDOM_JOKE_URI,
  crossDomain: true,
  createXHR: () => new window.XMLHttpRequest(),
}).map((e: AjaxResponse) => decodeHtml(e.response.value.joke));

export type ChuckNorrisApis = {
  getJoke: Function,
};

export default {
  getJoke,
};

