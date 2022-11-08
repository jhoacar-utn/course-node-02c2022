import React from 'react';
import { render } from 'react-dom';

import Cabecera from './header';
import { Main as Principal } from './main';
import { Footer } from './footer';

function Body() {
  return (
    <div>
      <Cabecera />
      <Principal />
      <Footer />
    </div>
  );
}

render(<Body />, document.getElementById('pagina'));
