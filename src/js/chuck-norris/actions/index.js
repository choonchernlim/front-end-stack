export const CHUCK_NORRIS_GET_JOKE = 'CHUCK_NORRIS_GET_JOKE';
export const CHUCK_NORRIS_SAVE_JOKE = 'CHUCK_NORRIS_SAVE_JOKE';

export const getJoke = () => ({
  type: CHUCK_NORRIS_GET_JOKE
});

export const saveJoke = (value) => ({
  type: CHUCK_NORRIS_SAVE_JOKE,
  value
});
