export const getJoke = () => ({
  type: 'GET_JOKE'
});

export const saveJoke = (value) => ({
  type: 'SAVE_JOKE',
  value
});
