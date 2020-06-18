import React from 'react';
import './App.css';
import Login from './components/Login.js';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

export default App;
