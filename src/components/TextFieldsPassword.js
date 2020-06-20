import React from 'react';

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  input: {
    // textAlign: "justify",
    float: "left",
    marginTop: "8px",
    marginBottom: "15px",
    height: "34px",
    fontSize: "14px",
    backgroundColor: "#E9EEFF",
    border: "1px solid #D1D4DA",
    borderRadius: "4px",
    transition: "all 250ms ease-in-out",
    paddingLeft: "8px",
    paddingTop: "0px",
    '&:focus': {
      outline: "none",
      boxShadow: "0px 0px 12px 0.8px #0e81ce96",
      border: "1px solid blue",
    },
  }
})
export default function TextFields() {

  const classes = useStyles();
  return(
    <input type="password" className={classes.input} />
  )
}

