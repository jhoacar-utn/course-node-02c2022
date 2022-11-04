import React from 'react';
import './App.css';
import ComponenteComoClase from './components/contador/Class';
import ComponenteComoFuncion from './components/contador/Funcion';
import Header from './components/Header';

function App() {
  return (
    <>
      {/* El <> seria una forma de devolver un elemento vacio (React Fragment) */}
      <Header />
      Hello World!
      <ComponenteComoClase nombre="pedro" />
      <ComponenteComoFuncion nombre="pedro" />
    </>
  );
}

export default App;
