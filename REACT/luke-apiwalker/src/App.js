import './App.css';
import Home from './Components/Home'
import {Router} from '@reach/router';
import Display from './Components/Display'


function App() {
  return (
    <div className="App">
        <Home/>
       <Router> 
          <Display path="/:stars/:id"/>
       </Router>
    </div>
  );
}

export default App;
