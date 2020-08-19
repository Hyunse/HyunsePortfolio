import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const Me = () => {
  const classes = useStyle();
  return (
    <div className={classes.aboutContainer}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <div>
        <Typography variant="subtitle1" gutterBottom>Web Developer</Typography>
        <Typography paragraph>
          Hello, my name is Kim Hyunse. I'm a Web Developer living in Toronto,
          Canada. I'm looking for a job as Web Developer. I love to work with
          people having a passion and enjoy learning something new. I can deal
          with both front-end and back-end technologies. I know how to create
          your website using the latest technologies available. I'm inquisitive
          about web programming.
        </Typography>
      </div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  aboutContainer: {
    width: '100%',
    marginTop: '100px',
    backgroundColor: '#fff',
  },
}));

export default Me;
