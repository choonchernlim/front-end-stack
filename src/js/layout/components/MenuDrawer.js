// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import AssignmentIcon from 'material-ui-icons/Assignment';
import MoodIcon from 'material-ui-icons/Mood';
import { withStyles } from 'material-ui/styles';
import { toggleMenu } from '../actions';
import styles from '../styles';
import stateSelector from '../../app/selectors/state-selector';

type Props = {
  isMenuCurrentlyOpened: boolean,
  shouldMenuLeftOpened: boolean,
  onToggleMenu: Function,
  history: Object,
  classes: Object,
};

const MenuDrawer = ( // eslint-disable-line function-paren-newline
  {
    isMenuCurrentlyOpened,
    shouldMenuLeftOpened,
    onToggleMenu,
    history,
    classes,
  }: Props) => {
  /**
   * When changing route, determine if there's a need to hide the menu especially when
   * user uses a small viewing device.
   *
   * @param path    Path to switch to
   */
  const changeRoute: Function = (path: string) => () => {
    history.push(path);

    if (!shouldMenuLeftOpened) {
      onToggleMenu();
    }
  };

  return (
    <Drawer
      type={shouldMenuLeftOpened ? 'persistent' : 'temporary'}
      open={isMenuCurrentlyOpened}
      classes={{ paper: classes.root }}
      onRequestClose={onToggleMenu}
    >
      <List>
        <div className={classes.toolbarHeight} />

        <Divider />

        <ListItem button onClick={changeRoute('/')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button onClick={changeRoute('/chuck-norris')}>
          <ListItemIcon>
            <MoodIcon />
          </ListItemIcon>
          <ListItemText primary="Chuck Norris" />
        </ListItem>

        <ListItem button onClick={changeRoute('/todo-manager')}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Todo Manager" />
        </ListItem>
      </List>
    </Drawer>
  );
};

const mapStateToProps = state => ({
  shouldMenuLeftOpened: stateSelector.layout.shouldMenuLeftOpened(state),
  isMenuCurrentlyOpened: stateSelector.layout.isMenuCurrentlyOpened(state),
});

const MenuDrawerContainer = connect(
  mapStateToProps,
  { onToggleMenu: toggleMenu },
)(MenuDrawer);

export default withRouter(withStyles(styles.menuDrawer)(MenuDrawerContainer));
