/**
 * This function make a request to extract
 * all the to do's in the backend
 * @param {number} start
 * @param {number} limit
 * @return {Promise<Array>}
 */
export async function getToDos(start, limit) {
  const url = `http://localhost:4040/api/v1/to-do?start=${start || 0}&limit=${limit || 10}`;

  const response = await fetch(url);

  const json = await response.json();

  return json.result;
}