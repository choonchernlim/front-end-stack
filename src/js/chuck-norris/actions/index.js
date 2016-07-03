export const GET_JOKE = 'chuck-norris/getJoke';
export const SAVE_JOKE = 'chuck-norris/saveJoke';

export const getJoke = () => ({
  type: GET_JOKE
});

export const saveJoke = (value) => ({
  type: SAVE_JOKE,
  value
});
