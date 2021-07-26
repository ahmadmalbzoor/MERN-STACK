import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './Components/Home';
import Id from "./Components/Id";
import Hello from "./Components/Hello";
function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/home" />
            {/* <Id path="/:id"/> */}
            <Hello path="/:hello"/>
            <Hello path="/:hello/:font/:back"/>
            
        </Router>
    </div>
  );
}

export default App;
