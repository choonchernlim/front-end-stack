// @flow

export const GET_JOKE: string = 'chuck-norris/getJoke';
export const GET_JOKE_FAILED: string = 'chuck-norris/getJokeFailed';
export const GET_JOKE_SUCCEEDED: string = 'chuck-norris/getJokeSucceeded';

export const getJoke = (): {
  type: string
} => ({
  type: GET_JOKE
});

export const getJokeFailed = (error: string): {
  type: string,
  error: string
} => ({
  type: GET_JOKE_FAILED,
  error
});

export const getJokeSucceeded = (joke: string): {
  type: string,
  joke: string
} => ({
  type: GET_JOKE_SUCCEEDED,
  joke
});
