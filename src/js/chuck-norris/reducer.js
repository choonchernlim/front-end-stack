// @flow
import JokeRecord from './models/joke-record';
import { ACTION_TYPES } from './actions';
import type { Action } from './types';

export default (state: JokeRecord = new JokeRecord(), action: Action): JokeRecord => {
  switch (action.type) {
    case ACTION_TYPES.GET_JOKE:
    case ACTION_TYPES.GET_JOKE_SUCCEEDED:
    case ACTION_TYPES.GET_JOKE_FAILED:
      return state.merge(action.state);

    default:
      return state;
  }
};
