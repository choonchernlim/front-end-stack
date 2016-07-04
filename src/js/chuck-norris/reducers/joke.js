import { Map } from 'immutable';
import { GET_JOKE_SUCCEED, GET_JOKE_FAILED } from '../actions';

const joke = (state = Map(), action) => {
  switch (action.type) {
    case GET_JOKE_SUCCEED:
      return state.merge({
        joke: action.joke,
        error: null
      });
    case GET_JOKE_FAILED:
      return state.merge({
        joke: null,
        error: action.error
      });
    default:
      return state;
  }
};

export default joke;
