function mostrarMensaje() {
  console.log('Segundo mensaje');
}

// El tiempo se medira en milisegundos, entonces 1000 sera un segundo
setTimeout(mostrarMensaje, 1000);

console.log('Primer Mensaje');
