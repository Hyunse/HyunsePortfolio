import React from 'react';
import { makeStyles } from '@material-ui/core';
import MainSection from './MainSection'
import NavList from '../Nav/NavList';

const Main = () => {
  const classes = useStyle();

  return (
    <div className={classes.mainContainer}>
      <NavList />
      <MainSection />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
}));

export default Main;