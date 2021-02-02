import React from 'react';
//import './style.css';
import { makeStyles } from '@material-ui/core/styles';

import  Header  from './componetns/Header';
import  NavBar  from './componetns/NavBar';
import  Feed  from './componetns/Feed';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'colimn'
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1280px',
    margin: '0 auto'
  },
  toolbar: {
    minHeight: 64
  }
})

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <NavBar />
        <Feed />
      </main>
    </div>
  )
}

export default Home;
