// @flow
import type { GetJokeAction, GetJokeFailedAction, GetJokeSucceededAction } from './types';

export const ACTION_TYPES: { [key: string]: string } = {
  GET_JOKE: 'chuck-norris/getJoke',
  GET_JOKE_FAILED: 'chuck-norris/getJokeFailed',
  GET_JOKE_SUCCEEDED: 'chuck-norris/getJokeSucceeded'
};

export const getJoke = (): GetJokeAction => ({
  type: ACTION_TYPES.GET_JOKE,
  state: {
    completed: false,
    joke: undefined,
    error: undefined
  }
});

export const getJokeFailed = (error: string): GetJokeFailedAction => ({
  type: ACTION_TYPES.GET_JOKE_FAILED,
  state: {
    completed: true,
    joke: undefined,
    error
  }
});

export const getJokeSucceeded = (joke: string): GetJokeSucceededAction => ({
  type: ACTION_TYPES.GET_JOKE_SUCCEEDED,
  state: {
    completed: true,
    joke,
    error: undefined
  }
});
