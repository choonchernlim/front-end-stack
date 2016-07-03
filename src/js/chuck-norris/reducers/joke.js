import { SAVE_JOKE } from '../actions';

const joke = (state = '', action) => {
  switch (action.type) {
    case SAVE_JOKE:
      return action.value;
    default:
      return state;
  }
};

export default joke;
