// @flow
import { Observable } from 'rxjs';
import { ajax, type AjaxResponse } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

export const RANDOM_JOKE_SERVER: string = 'https://api.icndb.com';
export const RANDOM_JOKE_URI: string = '/jokes/random';

// One way to decode HTML
// See http://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
const decodeHtml = (html: string): string => {
  const element: HTMLTextAreaElement = window.document.createElement('textarea');
  element.innerHTML = html;
  return element.value;
};

export type GetJokeApiFn = () => Observable;

const getJokeApi: GetJokeApiFn = () => (
  ajax({
    url: RANDOM_JOKE_SERVER + RANDOM_JOKE_URI,
    crossDomain: true,
    createXHR: () => new window.XMLHttpRequest(),
  }).pipe(map((e: AjaxResponse) => decodeHtml(e.response.value.joke)))
);

export default getJokeApi;
