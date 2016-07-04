import { Record } from 'immutable';
import { GET_JOKE, GET_JOKE_SUCCEEDED, GET_JOKE_FAILED } from '../actions';

const JokeRecord = new Record({
  completed: true,
  joke: undefined,
  error: undefined
});

const joke = (state = new JokeRecord(), action) => {
  switch (action.type) {
    case GET_JOKE:
      return state.merge({
        completed: false,
        joke: undefined,
        error: action.error
      });
    case GET_JOKE_SUCCEEDED:
      return state.merge({
        completed: true,
        joke: action.joke,
        error: undefined
      });
    case GET_JOKE_FAILED:
      return state.merge({
        completed: true,
        joke: undefined,
        error: action.error
      });
    default:
      return state;
  }
};

export default joke;
