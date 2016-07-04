export const GET_JOKE = 'chuck-norris/getJoke';
export const GET_JOKE_FAILED = 'chuck-norris/getJokeFailed';
export const GET_JOKE_SUCCEED = 'chuck-norris/getJokeSucceed';

export const getJoke = () => ({
  type: GET_JOKE
});

export const getJokeFailed = (error) => ({
  type: GET_JOKE_FAILED,
  error
});

export const getJokeSucceed = (joke) => ({
  type: GET_JOKE_SUCCEED,
  joke
});
