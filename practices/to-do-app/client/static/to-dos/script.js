const $listToDoButton = document.getElementById('listToDoButton');
const $toDoGetButton = document.getElementById('toDoGetButton');
const $toDoPostButton = document.getElementById('toDoPostButton');

async function getListToDo() {
  console.log('Obteniendo lista de tareas');
  const start = document.getElementById('start')?.value;
  const limit = document.getElementById('limit')?.value;

  const $listToDo = document.getElementById('listToDo');

  if (!start || !limit) {
    return console.log('No hay datos ingresados');
  }

  const url = `/api/v1/to-do?start=${start}&limit=${limit}`;

  const result = await fetch(url);

  const data = await result.json();

  const dataEnString = JSON.stringify(data);

  console.log(data);
  console.log(dataEnString);
  $listToDo.innerText = dataEnString;
  return null;
}

async function getToDo() {
  console.log('Obteniendo una tarea');

  const toDoIdGet = document.getElementById('toDoIdGet')?.value;
  const $toDoGet = document.getElementById('toDoGet');

  if (!toDoIdGet) {
    return console.log('Es requerido un ID');
  }

  const url = `/api/v1/to-do/${toDoIdGet}`;

  const result = await fetch(url);

  const data = await result.json();

  const dataEnString = JSON.stringify(data);

  console.log(data);
  console.log(dataEnString);
  $toDoGet.innerText = dataEnString;
  return null;
}

async function postPriority() {
  console.log('Publicando una prioridad a una tarea');

  const toDoIdPost = document.getElementById('toDoIdPost')?.value;
  const $toDoPost = document.getElementById('toDoPost');

  if (!toDoIdPost) {
    return console.log('Es requerido un ID');
  }

  const url = `/api/v1/priority/${toDoIdPost}`;

  const result = await fetch(url, {
    method: 'POST',
  });

  const data = await result.json();

  const dataEnString = JSON.stringify(data);

  console.log(data);
  console.log(dataEnString);
  $toDoPost.innerText = dataEnString;
  return null;
}

$listToDoButton.addEventListener('click', getListToDo);
$toDoGetButton.addEventListener('click', getToDo);
$toDoPostButton.addEventListener('click', postPriority);
