import { CHUCK_NORRIS_SAVE_JOKE } from '../actions';

const joke = (state = '', action) => {
  switch (action.type) {
    case CHUCK_NORRIS_SAVE_JOKE:
      return action.value;
    default:
      return state;
  }
};

export default joke;
