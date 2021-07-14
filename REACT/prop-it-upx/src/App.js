import React, { Component } from 'react';
import './App.css';
import PersonCard from './Components/PersonCard';
class App extends Component {
  render(){
  return (
    <div >
      <PersonCard firstName="Doe"lastName="Jane"age={45}hearColor="Black"/>
      <PersonCard firstName="Smith"lastName="John"age={88}hearColor="Brown"/>
      <PersonCard firstName="Fillmore"lastName="Millard"age={50}hearColor="Brown"/>
      <PersonCard firstName="Smith"lastName="Maria"age={62}hearColor="Brown"/>
    </div>
  );
}
}

export default App;
