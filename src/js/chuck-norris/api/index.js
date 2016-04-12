import fetch from 'isomorphic-fetch';

export function getRandomJoke() {
  return fetch('http://api.icndb.com/jokes/random/');
}
