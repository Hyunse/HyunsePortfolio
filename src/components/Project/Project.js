import React from 'react';
import { makeStyles } from '@material-ui/core';
import BoschTitle from '../../assets/images/bosch/bosch_title.jpg'


const Projects = () => {
  const classes = useStyle();

  return (
    <div id="project" className={classes.projectsContainer}>
      <haeder>Projects</haeder>
      <div>
        <div>
          <img src={BoschTitle} alt="bosch_title" style={{width: '100px', height: '100px'}}/>
          <h1>Title</h1>
        </div>
      </div>
    </div>
  );
};

const useStyle = makeStyles((theme) => ({
  projectsContainer: {
    width: '100%',
    marginTop: '500px',
    marginBottom: '500px',
    backgroundColor: '#fff'
  },
}));

export default Projects;