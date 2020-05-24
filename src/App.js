import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 'ddsds1', name: 'Pranab', age: 29 },
      {id: 'saasa1', name: 'Saroj' , age: 31 },
      {id: 'ddsdds11', name: 'Pramod' , age:27 }
    ],
    otherState: 'Some other value',
    showPersons: false
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
      </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi , I am a React App</h1>
        <button
          style = {style}
          onClick = {this.togglePersonHandler}>Toggle Persons</button>
          {persons}
      </div>
    );

    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi , I am a React App!!!'))
  }
}

export default App;
