import React, { Component } from 'react';
import "./Login.css";
import symbol from '../img/icon_github.png';

class Login extends Component{
  render() {
    return(
      <div className="Login">
        <div className="Header">
          <img src={symbol} width="46px" height="46px" />
          <h1>Sign in to GitHub</h1>
        </div>

        <div className="main">
          <div className="main1">
            <label>Username or email address</label><br/>
            <input type="text" /><br/>
            <label className="password">Password</label>
            <a href="#">Forgot password?</a><br/>
            <input type="password" /><br/>
            <input className="submit" type="button" value="Sign in"></input>
          </div>
        </div>

        <div className="bottom">
          <p>New to GitHub? <a href="#">Create an account.</a></p>
        </div>
        <div className="additional">
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privay</a></li>
            <li><a href="#">Security</a></li>
            <li><a className="contact" href="#">Contact Github</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Login;