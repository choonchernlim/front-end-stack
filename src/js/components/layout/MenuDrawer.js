// @flow
import React from 'react';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Mood as MoodIcon,
  Assignment as AssignmentIcon,
  Home as HomeIcon,
} from '@material-ui/icons';

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
      variant={shouldMenuLeftOpened ? 'persistent' : 'temporary'}
      open={isMenuCurrentlyOpened}
      classes={{ paper: classes.root }}
      onClose={onToggleMenu}
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

export default MenuDrawer;
