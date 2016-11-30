import fetch from 'isomorphic-fetch';

export const RANDOM_JOKE_SERVER = 'https://api.icndb.com';
export const RANDOM_JOKE_URI = '/jokes/random';

export function getRandomJokeApi() {
  return fetch(RANDOM_JOKE_SERVER + RANDOM_JOKE_URI)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error(`Unable to get a random joke: ${response.statusText}`);
      }

      return response.json();
    })
    .then(json => json.value.joke);
}
