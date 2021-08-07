import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {

  const [socket] = useState(() => io(':8000'));

  useEffect(() => {

    console.log('Is this running?');
    socket.on("Welcome Home Client", data => console.log(data));
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <h1>You are Welcome </h1>
    </div>
  );
}

export default App;