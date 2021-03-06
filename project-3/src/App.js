import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Nav from "./components/Nav"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          </header>

          <Nav />
      </div>
    );
  }
}

export default App;
