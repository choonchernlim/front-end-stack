// @flow
export const ACTION_TYPES: { [key: string]: string } = {
  GET_JOKE: 'chuck-norris/getJoke',
  GET_JOKE_FAILED: 'chuck-norris/getJokeFailed',
  GET_JOKE_SUCCEEDED: 'chuck-norris/getJokeSucceeded'
};

export const getJoke = (): GetJokeAction => ({
  type: ACTION_TYPES.GET_JOKE
});

export const getJokeFailed = (error: string): GetJokeFailedAction => ({
  type: ACTION_TYPES.GET_JOKE_FAILED,
  error
});

export const getJokeSucceeded = (joke: string): GetJokeSucceededAction => ({
  type: ACTION_TYPES.GET_JOKE_SUCCEEDED,
  joke
});
