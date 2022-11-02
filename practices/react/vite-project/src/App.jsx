import './App.css';
import ComponenteComoClase from './components/contador/Class';
import ComponenteComoFuncion from './components/contador/Funcion';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      Hello World!
      <ComponenteComoClase nombre="pedro" />
      <ComponenteComoFuncion />
    </div>
  );
}

export default App;
