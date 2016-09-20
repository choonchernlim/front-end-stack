export const GET_JOKE = 'chuck-norris/getJoke';
export const GET_JOKE_FAILED = 'chuck-norris/getJokeFailed';
export const GET_JOKE_SUCCEEDED = 'chuck-norris/getJokeSucceeded';

export const getJoke = () => ({
  type: GET_JOKE
});

export const getJokeFailed = error => ({
  type: GET_JOKE_FAILED,
  error
});

export const getJokeSucceeded = joke => ({
  type: GET_JOKE_SUCCEEDED,
  joke
});
