import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '@material-ui/icons/GitHub';
import React from 'react';

import TextFieldsPassword from './TextFieldsPassword';
import TextFieldsUsername from './TextFieldsUsername';

const Button1 = styled(Button)({
  backgroundColor: "#00BD40",
  backgroundImage: "linear-gradient(-180deg,#2fcb53,#269f42 90%)",
  borderColor: "rgba(27,31,35,.5)",
  padding: "6px 12px",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "22px",
  textTransform: "capitalize",
  margin: "5px 0px",
})
const useStyles = makeStyles({
  logo: {
    marginTop: "32px",
    width: "3.8%",
    height: "3.8%",
  },
  h1: {
    fontSize: "24px",
    fontWeight: "300",
    letterSpacing: "-.5px",
    marginTop: "25px",
  },
  form1: {
    width: "300px",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid #d8dee2",
    margin: "20px auto",
    textAlign: "left",
    padding: "16px 20px",
  },
  form2: {
    padding: "15px 20px",
    border: "1px solid #d8dee2",
    display: "block",
    margin: "-4px auto",
    width: "300px",
    borderRadius: "4px",
    backgroundColor: "white",
  },
  form3: {
    marginTop: "40px",
    width: "300px",
    fontSize: "12px",
    padding: "40px 18px",
    margin: "0px auto",
  },
  text1: {
    fontSize: "15px",
    fontWeight: "bold",
  },  
  link: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#0366d6",
    paddingRight: "-20px",
  },
  link1: {
    margin: "0px",
    color: "#0366d6",
    paddingRight: "4px",
  },
  link2: {
    color: "#586069!important",
    paddingLeft: "4px",
  },
  submit: {
    marginTop: "40px",
  },
  p: {
    fontSize: "14px",
  }
})

export default function Github() {
  const classes = useStyles();
  
  return(
    <Container className={classes.paper} maxWidth="xl">
      <CssBaseline />
      <GithubIcon className={classes.logo} />
      <Typography variant="h1" className={classes.h1}>Sign in to GitHub</Typography>
      <FormControl className={classes.form1}>
        <Typography className={classes.text1}>Username or email address</Typography>
        <TextFieldsUsername></TextFieldsUsername>
        <Grid container>
          <Grid item xs>
            <Typography className={classes.text1}>
              Password
            </Typography>
          </Grid>
          <Grid item>
            <Link style={{textDecoration: 'none'}} href="#" className={classes.link}>
              {"Forgot password?"}
            </Link>
          </Grid>
        </Grid>
        <TextFieldsPassword></TextFieldsPassword>
        <Button1
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >Sign in
        </Button1>
      </FormControl>
      <FormControl className={classes.form2}>
        <Typography className={classes.p}>New to GitHub?
          <Link style={{color: "#0366d6"}}> Create an account.</Link>
        </Typography>
      </FormControl>
      <Grid container className={classes.form3}>
          <Grid item sm>
              <Link className={classes.link1}>{"Terms"}</Link>
          </Grid>
          <Grid item sm>
              <Link className={classes.link1}>{"Privacy"}</Link>
          </Grid>
          <Grid item sm>
              <Link className={classes.link1}>{"Security"}</Link>
          </Grid>
          <Grid item>
              <Link className={classes.link2}>{"Contact GitHub"}</Link>
          </Grid>
      </Grid>
    </Container>
  )
}