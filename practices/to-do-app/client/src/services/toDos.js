const SERVER_HOST = import.meta.env.VITE_BASE_URL || '';

const SERVER_API = `${SERVER_HOST}/api/v1`;
/**
 * This function make a request to extract
 * all the to do's in the backend
 * @param {number} start
 * @param {number} limit
 * @return {Promise<Array>}
 */
export async function getToDos(start, limit) {
  const url = `${SERVER_API}/to-do?start=${start || 0}&limit=${limit || 10}`;

  const response = await fetch(url);

  const json = await response.json();

  return json.result;
}

/**
 * This function make a request to extract
 * an specific ToDo in the backend
 * @param {string} toDoId
 * @return {Promise<Array>}
 */
export async function getToDo(toDoId) {
  const url = `${SERVER_API}/to-do/${toDoId}`;

  const response = await fetch(url);

  const json = await response.json();

  return json.result;
}
