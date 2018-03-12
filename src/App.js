import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header menu={this.props.menu}/>
        <Main />
      </div>
    );
  }
}

export default App;
