const SERVER_API = import.meta.env.VITE_SERVER_API || '/api/v1';

const VOTES_URL = `${SERVER_API}/votes`;

/**
 * This function post a Vote by Id
 * @returns
 */
export async function postVote(id) {
  if (!id || typeof id !== 'string') {
    throw new Error('id is required for make request');
  }

  const response = await fetch(`${VOTES_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  const json = await response.json();

  console.log(json);

  const { result } = json;

  if (!result) {
    throw new Error('An error has ocurred in the server');
  }

  return result;
}
