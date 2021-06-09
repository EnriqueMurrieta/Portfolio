import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Fab from './Fab';

//CROSS BROWSER COMPATIBILITY

function App() {
  useEffect(() => {
    document.title = "Murrieta Acuña, Esteban Enrique"
  })

  return (
    <div>
      <Header/>
      <Content/>
      <Fab/>  
    </div>
  );
}

export default App;