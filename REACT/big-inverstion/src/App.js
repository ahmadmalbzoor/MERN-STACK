import logo from './logo.svg';
import './App.css';
import './components/PersonCard'
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
    <PersonCard firstName="ahmad" lastName="Bzoor" Age={30} hairColor="Black"/>
    <PersonCard firstName="ahmad" lastName="Bzoor" Age={30} hairColor="Black"/>
    <PersonCard firstName="ahmad" lastName="Bzoor" Age={30} hairColor="Black"/>
    <PersonCard firstName="ahmad" lastName="Bzoor" Age={30} hairColor="Black"/>
 
    </div>
  );
}

export default App;
