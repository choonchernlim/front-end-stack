// @flow
import { Observable, type AjaxResponse, type AjaxError } from 'rxjs';
import { ACTION_TYPES, getJokeFailed, getJokeSucceeded } from '../actions';

// One way to decode HTML
// See http://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
const decodeHtml = (html: string): string => {
  const element: HTMLTextAreaElement = document.createElement('textarea');
  element.innerHTML = html;
  return element.value;
};

const getJokeEpic = (action$: Observable) => action$
  .ofType(ACTION_TYPES.GET_JOKE)
  .mergeMap(() => Observable
    .ajax({ url: 'https://api.icndb.com/jokes/random', crossDomain: true })
    .map((e: AjaxResponse) => getJokeSucceeded(decodeHtml(e.response.value.joke)))
    .catch((error: AjaxError) => Observable.of(getJokeFailed(error.message))));

export default getJokeEpic;
