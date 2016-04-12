import { Grid } from 'radium-grid';

const appBarHeight = '64px';
const leftNavWidth = '250px';

export default {
  appBar: {
    base: {
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

    [Grid.defaultProps.breakpoints.small]: {
      margin: `${appBarHeight} 2rem 5rem`
    },

    [Grid.defaultProps.breakpoints.medium]: {
      margin: `${appBarHeight} 3rem 5rem`
    }
  }
};
