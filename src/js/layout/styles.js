// @flow
const appBarHeight = '64px';
const leftNavWidth = '250px';

export const mediaQuery = {
  small: 'only screen and (max-width: 640px)',
  medium: 'only screen and (min-width: 641px) and (max-width: 1024px)',
  large: 'only screen and (min-width: 1025px)'
};

export default {
  appBar: {
    base: {
      top: 0,
      position: 'fixed'
    },
    title: {
      cursor: 'pointer'
    },
    iconRight: {
      margin: 0,
      padding: 0,
      alignSelf: 'center',
      width: '40px',
      height: '40px'
    }
  },
  leftNav: {
    top: appBarHeight,
    width: leftNavWidth
  },
  container: {
    margin: `${appBarHeight} 3rem 5rem calc(${leftNavWidth} + 3rem)`,

    [`@media ${mediaQuery.small}`]: {
      margin: `${appBarHeight} 2rem 5rem`
    },

    [`@media ${mediaQuery.medium}`]: {
      margin: `${appBarHeight} 2rem 5rem`
    }
  }
};
