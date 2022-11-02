/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
function Contador() {
  let contador = 0;
  return (
    <div
      style={{
        padding: '1rem', border: 'solid red 1px', cursor: 'pointer', margin: '1rem',
      }}
      onClick={() => {
        alert('Haciendo click en componente de funcion');
        contador++;
      }}
    >
      Cantidad (Funcion) - {contador}
    </div>
  );
}

export default Contador;
