import React from 'react';
import Login from './components/Login';

import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  contaner: {
    backgroundColor: '#F9F9F9',
    minHeight: '500px',
    textAlign: 'center',
    fontFamily: 
      "-apple-system, BlinkMacSystemFont,Segoe UI, Helvetica,Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji",
    color: '#24292e',
  }
})
export default function App() {

  const classes = useStyles();
  return(
    <Container className={classes.contaner} maxWidth="xl">
      <Login />
    </Container>
  )
}

