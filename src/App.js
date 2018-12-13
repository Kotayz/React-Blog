import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App Site">
          <div className="Site-content">
            <div className="App-header">
              <Header/>
            </div>
            <div className="main">
              <Main/>
            </div>
          </div>
          <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
     return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
     );
  }
}

class Main extends React.Component {
  render() {
     return (
        <div>
           <Button variant="contained" color="primary">
            Hello World
          </Button>
        </div>
     );
  }
}

export default App;
