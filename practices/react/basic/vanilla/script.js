const $body = document.getElementById('pagina');

const $header = document.createElement('header');
$header.innerText = 'Cabecera';
const $main = document.createElement('main');
$main.innerText = 'Principal';
const $footer = document.createElement('footer');
$footer.innerText = 'Pie de Pagina';

$body.appendChild($header);
$body.appendChild($main);
$body.appendChild($footer);
