How react JSX works behing the scenes ex:

regulas jsx code:

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, I am in React app</h1>
      </div>
    );
  }
}

export default App;

behing the scene the above jsx would be the below js:

React.createElement('div', {className: 'App'}, React.createElement('h1), null, 'Does this work now?')
// returns 
Does this work now?   //With the css style by calling the app class

React convention:

Directories and files should start with capital letter: 
Person
Use ES6 syntax