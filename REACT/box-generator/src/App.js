import React, { useState } from 'react';
import AddBox from './components/AddBox';
import DisplayBox from './components/DisplayBox';
    
    
function App() {
  const [boxes, setBoxes] = useState([]);
  const addDiv = (color,width,hight) => {
    setBoxes([...boxes, {color,width,hight}])
  }
    return(
      <div className="App">
      <AddBox addDiv={addDiv} />
      <DisplayBox boxes={boxes} />
      {  console.log("ahmadssssssssssssssssssss")}


    </div>
    );
};
    
export default App;
