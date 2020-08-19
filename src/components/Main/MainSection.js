import React from 'react';
import { makeStyles } from '@material-ui/core';
import Me from '../About/Me';
import Project from '../Project/Project'

const MainSection = () => {
  const classes = useStyle();

  return (
    <div className={classes.mainSection}>
      <Me />
      <Project />
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  mainSection: {
    width: '100%',
    marginLeft: '20px',
  },
}));

export default MainSection;