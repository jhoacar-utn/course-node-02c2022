import { getToken } from '../utils/token';

const SERVER_HOST = import.meta.env.VITE_BASE_URL || '';

const SERVER_API = `${SERVER_HOST}/api/v1`;
/**
 * This function make a request to extract
 * all the to do's in the backend
 * @param {number} start
 * @param {number} limit
 * @return {Promise<{result: Array, total: Number}>}
 */
export async function getToDos(start, limit) {
  const url = `${SERVER_API}/to-do?start=${start || 0}&limit=${limit || 5}`;

  const token = getToken();

  if (!token) {
    throw new Error('El token es requerido');
  }

  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  const { result, total } = json;

  if (!result && !total) {
    throw new Error('No hay resultado, por lo tanto hay lista de tareas');
  }

  return {
    result,
    total,
  };
}

/**
 * This function make a request to extract
 * an specific ToDo in the backend
 * @param {string} toDoId
 * @return {Promise<Array>}
 */
export async function getToDo(toDoId) {
  const url = `${SERVER_API}/to-do/${toDoId}`;

  const token = getToken();

  if (!token) {
    throw new Error('El token es requerido');
  }

  const response = await fetch(url, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  const { result } = json;

  if (!result) {
    throw new Error('No hay resultado, por lo tanto no hay tarea');
  }

  return result;
}

/**
 * This function make a request to increment
 * priority using an id
 * @param {string} id
 * @return {Promise<Object>}
 */
export async function incrementPriority(ToDoId) {
  const url = `${SERVER_API}/priority`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: ToDoId }), // `{ id : ${ToDoId} }`,
  });

  const json = await response.json();

  const { result } = json;

  if (!result) {
    throw new Error('No hay resultado, por lo tanto hay tarea');
  }

  return result;
}
