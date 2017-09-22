// @flow
// TODO LIMC remove this?
import fetch from 'isomorphic-fetch';

export const RANDOM_JOKE_SERVER = 'https://api.icndb.com';
export const RANDOM_JOKE_URI = '/jokes/random';

// One way to decode HTML
// See http://stackoverflow.com/questions/7394748/whats-the-right-way-to-decode-a-string-that-has-special-html-entities-in-it
const decodeHtml = (html: string): string => {
  const element: HTMLTextAreaElement = document.createElement('textarea');
  element.innerHTML = html;
  return element.value;
};

export function getRandomJokeApi(): Promise<string> {
  return fetch(RANDOM_JOKE_SERVER + RANDOM_JOKE_URI)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error(`Unable to get a random joke: ${response.statusText}`);
      }

      return response.json();
    })
    .then(json => decodeHtml(json.value.joke));
}
