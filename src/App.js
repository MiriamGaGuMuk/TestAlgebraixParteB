import React from 'react';
import Secundaria from './Components/Secundaria/Secundaria'
import Primero from './Components/Primero/Primero';
import Segundo from './Components/Segundo/Segundo';
import Tercero from './Components/Tercero/Tercero';
import './App.css';


function App() {
  return (
    <div className="App">
      <Secundaria/>
      <Primero/>
      <Segundo/>
      <Tercero/>
    </div>
  );
}

export default App;
