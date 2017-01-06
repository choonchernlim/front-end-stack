// @flow
export const ACTION_TYPES: { [key:string]: string } = {
  GET_JOKE: 'chuck-norris/getJoke',
  GET_JOKE_FAILED: 'chuck-norris/getJokeFailed',
  GET_JOKE_SUCCEEDED: 'chuck-norris/getJokeSucceeded'
};

// TODO move to `flow-types/` and use [libs]
type GetJokeAction = { type: string };
type GetJokeFailedAction = { type: string, error: string };
type GetJokeSucceededAction = { type: string, joke: string };

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
