const SERVER_API = import.meta.env.VITE_SERVER_API || '/api/v1';

const EMOJIS_URL = `${SERVER_API}/emojis`;

/**
 * This function returns all Emojis
 * @returns
 */
export async function getEmojis(start, limit) {
  const response = await fetch(`${EMOJIS_URL}?start=${start}&limit=${limit}`);

  const json = await response.json();

  console.log(json);

  const { result, total } = json;

  if (!result) {
    throw new Error('An error has ocurred in the server');
  }

  return {
    result,
    total,
  };
}

/**
 * This function get a Emoji by Id
 * @returns
 */
export async function getEmoji(id) {
  const response = await fetch(`${EMOJIS_URL}/${id}`);

  const json = await response.json();

  console.log(json);

  const { result } = json;

  if (!result) {
    throw new Error('An error has ocurred in the server');
  }

  return result;
}
