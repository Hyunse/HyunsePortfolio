import React from 'react';
import { List, makeStyles } from '@material-ui/core';
import NavItem from './NavItem';

const NavList = () => {
  const classes = useStyle();

  return (
    <div className={classes.navContainer}>
      <List component="nav" className={classes.list}>
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
      </List>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  navContainer: {
    width: '200px',
    marginTop: '100px',
  },
  list: {
    backgroundColor: '#fff',
  },
}));

export default NavList;
