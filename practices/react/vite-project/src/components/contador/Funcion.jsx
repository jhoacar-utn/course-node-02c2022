/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';

/* eslint-disable react/jsx-one-expression-per-line */
function Contador() {
  const [state, setState] = useState({ contador: 0 });
  // const [otro, setOtro] = useState('Hola');
  const [active, setActive] = useState(false);

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
    </div>
  );
}

export default Contador;
