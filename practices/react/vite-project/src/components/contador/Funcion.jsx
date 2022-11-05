/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState, useEffect } from 'react';

/* eslint-disable react/jsx-one-expression-per-line */
function Contador(props) {
  /**
   * useState es un hook usado para crear un estado
   * en el componente y es devuelto como un array,
   * donde, en la primera posicion sera el valor del estado
   * y en la segunda posicion, la function a cambiar dicho estado
   */
  const [state, setState] = useState({ contador: 0 });
  // const [otro, setOtro] = useState('Hola');
  const [active, setActive] = useState(false);

  /**
   * useEffect es un hook usado para manipular el ciclo
   * de vida de un componente, que se resume basicamente
   * en las distintas etapas de renderizado que serian:
   *  - construccion
   *  - mostrar al usuario
   *  - destruccion
   *
   * El useEffect recibe por primer parametro una funcion
   * a ejecutar, esta funcion a ejecutar le podemos decir
   * como o en que circunstancias ejecutarla, y tambien
   * esta funcion del primer parametro le podemos devolver
   * otra funcion que se ejecutara cuando se decida realizar
   * una limpieza en la logica previamente ejecutada
   *
   * El decirle cuando ejecutarse se hace con el segundo
   * parametro que es un array de dependencias
   */
  useEffect(() => {
    alert('Ejecutando mi efecto');

    return () => {
      alert('Ejecutando limpieza de la logica del efecto');
    };
  }, [state]);

  return (
    <div
      style={{
        padding: '1rem', border: 'solid red 1px', cursor: 'pointer', margin: '1rem',
      }}
      onClick={() => {
        // alert('Haciendo click en componente de funcion');
        setState({
          contador: state.contador + 1,
        });
        setActive(!active);
      }}
    >
      Cantidad (Funcion) - {state.contador}
      {' '}
      {active.toString()}
      {' '}
      {props.nombre}
    </div>
  );
}

export default Contador;
