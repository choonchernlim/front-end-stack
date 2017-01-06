import JokeRecord from '../models/joke-record';
import { ACTION_TYPES } from '../actions';

export default (state = new JokeRecord(), action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_JOKE:
      return state.merge({
        completed: false,
        joke: undefined,
        error: action.error
      });
    case ACTION_TYPES.GET_JOKE_SUCCEEDED:
      return state.merge({
        completed: true,
        joke: action.joke,
        error: ''
      });
    case ACTION_TYPES.GET_JOKE_FAILED:
      return state.merge({
        completed: true,
        joke: undefined,
        error: action.error
      });
    default:
      return state;
  }
};
