import fetch from 'isomorphic-fetch';

export function getRandomJokeApi() {
  return fetch('http://api.icndb.com/jokes/random')
    .then(response => {
      if (response.status >= 400) {
        throw new Error(`Unable to get a random joke: ${response.statusText}`);
      }

      return response.json();
    })
    .then(json => json.value.joke);
}
