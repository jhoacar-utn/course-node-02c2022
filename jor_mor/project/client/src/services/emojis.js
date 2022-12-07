const SERVER_HOST = import.meta.env.VITE_BASE_URL || '';

const SERVER_API = `${SERVER_HOST}/api/v1`;
/**
 * This function make a request to extract
 * all the to do's in the backend
 * @param {number} start
 * @param {number} limit
 * @return {Promise<{result: Array, total: Number}>}
 */
export async function getEmojis(start, limit) {
  const url = `${SERVER_API}/emojis?start=${start || 0}&limit=${limit || 10}`;

  const response = await fetch(url);

  const json = await response.json();

  const { result, total } = json;

  if (!result && !total) {
    throw new Error('No hay resultado, por lo tanto hay emojis');
  }

  return {
    result,
    total,
  };
}

/**
 * This function make a request to extract
 * an specific ToDo in the backend
 * @param {string} id
 * @return {Promise<Array>}
 */
export async function getEmoji(id) {
  const url = `${SERVER_API}/emojis/${id}`;

  const response = await fetch(url);

  const json = await response.json();

  const { result } = json;

  if (!result) {
    throw new Error('No hay resultado, por lo tanto no hay emojis');
  }

  return result;
}

/**
 * This function make a request to increment
 * priority using an id
 * @param {string} id
 * @return {Promise<Object>}
 */
export async function incrementVotes(id) {
  const url = `${SERVER_API}/votes`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }), // `{ id : ${id} }`,
  });

  const json = await response.json();

  return json.result;
}
