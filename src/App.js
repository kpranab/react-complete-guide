import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Pranab', age: 29 },
      {name: 'Saroj' , age: 31 },
      {name: 'Pramod' , age:27 }
    ],
    otherState: 'Some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!');
    this.setState( {
      persons: [
        {name: newName, age: 29 },
        {name: 'Saroj' , age: 31 },
        {name: 'Pramod' , age:26 }
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        {name: 'Pranab', age: 29 },
        {name: event.target.value , age: 31 },
        {name: 'Pramod' , age:26 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi , I am a React App</h1>
        <button onClick = { () => this.switchNameHandler('Pranab !!!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}
          click = {this.switchNameHandler.bind(this,'Pranab!')}
          changed = {this.nameChangeHandler}> My Hobbies: Watching News</Person>
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div>
    );

    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi , I am a React App!!!'))
  }
}

export default App;
