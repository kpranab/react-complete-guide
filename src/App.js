import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi , I am a React App</h1>
        <Person name='Pranab' age= '29'/>
        <Person name='Saroj' age= '31'>My Hobbies: Watching News</Person>
        <Person name='Pramod' age= '27'/>
      </div>
    );

    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi , I am a React App!!!'))
  }
}

export default App;
