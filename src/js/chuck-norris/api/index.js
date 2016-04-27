import fetch from 'isomorphic-fetch';

export function getRandomJoke() {
  return fetch('https://api.icndb.com/jokes/random/');
}
