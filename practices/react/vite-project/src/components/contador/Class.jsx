/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-undef */
import { Component } from 'react';

class Contador extends Component {
  /**
   * Esta function es la primera que se ejecuta
   * cuando recien se construye este componente
   */
  constructor(props) {
    super(props); // Construimos el padre primero
    /**
     * Declaramos un estado para nuestro componente
     * el cual tendra un contador con un valor inicial en 0
     *
     * Este atributo de la clase llamado 'state' es muy especial
     * Debido a que tiene que ser inmutable
     *
     * Inmutable quiere decir que no puedo utilizar el operador '='
     *
     * La unica forma para poder cambiar el estado, o alterar este
     * estado, es usando una funcion que existe en el componente,
     * llamada setState
     */
    this.state = {
      contador: 0,
    };
  }

  /**
   * Esta funcion es la que se ejecuta cuando
   * se va a mostrar por pantalla al usuario
   */
  render() {
    return (
      <div style={{
        padding: '1rem', border: 'solid blue 1px', cursor: 'pointer', margin: '1rem',
      }}
        onClick={() => {
          // alert('Haciendo click en componente de clase');
          // this.state.contador += 1; // Esto esta mal, el estado es inmutable
          this.setState({
            contador: this.state.contador + 1,
          });
        }}
      >
        Cantidad (Clase) - {this.state.contador}
        {' '}
        {this.props.nombre}
      </div>
    );
  }
}

export default Contador;
