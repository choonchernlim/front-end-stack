// @flow
import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoodIcon from '@material-ui/icons/Mood';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';
import makeStyles from '@material-ui/core/styles/makeStyles';

type Props = $ReadOnly<{|
  isMenuCurrentlyOpened: boolean,
  shouldMenuLeftOpened: boolean,
  onToggleMenu: Function,
  onRouteChange: Function,
|}>;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 240,
    height: '100%',
  },
  toolbarHeight: {
    minHeight: theme.mixins.toolbar.minHeight,
  },
}));

const MenuDrawer = ({
  isMenuCurrentlyOpened,
  shouldMenuLeftOpened,
  onToggleMenu,
  onRouteChange,
}: Props) => {
  const classes = useStyles();

  /**
   * When changing route, determine if there's a need to hide the menu especially when
   * user uses a small viewing device.
   *
   * @param path    Path to switch to
   */
  const changeRoute: Function = (path: string) => () => {
    onRouteChange(path);

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
