// @flow
import ACTION_TYPES, { type GetJokeAction } from './types';

type GetJokeFn = () => GetJokeAction;
type GetJokeFailedFn = (error: string) => GetJokeAction;
type GetJokeSucceededFn = (joke: string) => GetJokeAction;

export const getJoke: GetJokeFn = () => ({
  type: ACTION_TYPES.GET_JOKE,
  state: {
    completed: false,
    joke: undefined,
    error: undefined,
  },
});

export const getJokeFailed: GetJokeFailedFn = error => ({
  type: ACTION_TYPES.GET_JOKE_FAILED,
  state: {
    completed: true,
    joke: undefined,
    error,
  },
});

export const getJokeSucceeded: GetJokeSucceededFn = joke => ({
  type: ACTION_TYPES.GET_JOKE_SUCCEEDED,
  state: {
    completed: true,
    joke,
    error: undefined,
  },
});
