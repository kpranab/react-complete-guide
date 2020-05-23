import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
 const [personsState, setPersonsState] =  useState({
    persons: [
      {name: 'Pranab', age: 29 },
      {name: 'Saroj' , age: 31 },
      {name: 'Pramod' , age:27 }
    ],
    otherState: 'Some other value'
  });

  //const [otherState,setOtherState] = useState('Some other value');
//console.log(personsState,otherState);

const switchNameHandler = () => {
    //console.log('Was Clicked!');
    setPersonsState( {
      persons: [
        {name: 'Pranab Kumar Sahoo', age: 29 },
        {name: 'Saroj' , age: 31 },
        {name: 'Pramod' , age:26 }
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi , I am a React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age= {personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age= {personsState.persons[1].age}>My Hobbies: Watching News</Person>
        <Person name={personsState.persons[2].name} age= {personsState.persons[2].age}/>
      </div>
    );

    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi , I am a React App!!!'))

}

export default App;
