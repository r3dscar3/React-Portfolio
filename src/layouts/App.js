import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nolan Panther</h1>
        </header>
        <p className="App-intro">
          This is the start of something...
        </p>
      </div>
    );
  }
}

export default App;
