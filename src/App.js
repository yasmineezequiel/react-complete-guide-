import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, I am in React app</h1>
        <Person />
      </div>
    );
  }
}

export default App;
