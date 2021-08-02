import Client from "./Components/Client"
import './App.css';
import { Router } from '@reach/router';
import Main from './view/Main';
import Detail from './view/Details';
import Edit from "./view/Edit";
function App() {
  return (
    <div className="App">
        <Router>
            <Main path="/"/>
            <Detail path="people/:id" />
            <Edit path="people/:id/edit"/>
        </Router>
    </div>
  );
}

export default App;
