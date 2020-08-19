import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Main from './components/Main/Main';

function App() {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.appContainer}>
        <div className={classes.homeContainer}>
          <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}

const useStyle = makeStyles((theme) => ({
  appContainer: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  homeContainer: {
    position: 'relative',
    width: '960px',
  },
}));

export default App;
