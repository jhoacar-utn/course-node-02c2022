import React from 'react';
import { render } from 'react-dom';

function Header() {
  return (
    <header>
      Cabecera
    </header>
  );
}

function Main() {
  return (
    <main>
      Principal
    </main>
  );
}

function Footer() {
  return (
    <footer>
      Pie de Pagina
    </footer>
  );
}

function Body() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

render(<Body />, document.getElementById('pagina'));
