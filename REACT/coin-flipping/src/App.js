import logo from './logo.svg';
import './App.css';

function App() {
  function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
  
    function fiveHeadsSync() {
      let headsCount = 0;
      let attempts = 0;
      while(headsCount < 5) {
          attempts++;
          let result = tossCoin();
          console.log(`${result} was flipped`);
          if(result === "heads") {
              headsCount++;
          } else {
              headsCount = 0;
          }
      }
      return  attempts;
  }
  
  function fiveHeads() {
    return new Promise( (resolve, reject) => {

          let result = fiveHeadsSync();
            if(result < 100){
              resolve(`It took ${result} tries to flip five "heads"`);
            }
            else   reject("it'll take more than 100 attempts");
    
  })
  }

  function callFive(){
  fiveHeads()
      .then( res => console.log(res) )
      .catch( err => console.log(err) );
      console.log( "When does this run now?" );
  }
  
  return (
  <div className="App" >
    {callFive()}
  </div>
  
  );
}

export default App;
