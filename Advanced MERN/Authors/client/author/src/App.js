import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Router } from '@reach/router';
import Main from './view/Main';
// import Update from './components/Update';
import ShowUpdate from './components/ShowUpdate';
function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
         <Home path='/' /> 
        <Main path="/new" />
        <ShowUpdate path="/:id"/>
      </Router>
    </div>
  );
}

export default App;
