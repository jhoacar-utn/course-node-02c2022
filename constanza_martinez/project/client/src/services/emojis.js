const SERVER_HOST = import.meta.env.VITE_BASE_URL || '';

const SERVER_API = `${SERVER_HOST}/api/v1`;
/**
 * This function makes a request to extract
 * all the to emojis in the backend
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
    throw new Error('No result');
  }

  return {
    result,
    total,
  };
}

/**
 * This function makes a request to extract
 * an specific emoji in the backend
 * @param {string} _id
 * @return {Promise<Array>}
 */
export async function getEmoji(emojiId) {
  const url = `${SERVER_API}/emojis/${emojiId}`;

  const response = await fetch(url);

  const json = await response.json();

  const { result } = json;

  if (!result) {
    throw new Error('No result');
  }

  return result;
}

/**
 * This function makes a request to vote
 * an emoji using an id
 * @param {string} _id
 * @return {Promise<Object>}
 */
export async function voteEmoji(emojiId) {
  const url = `${SERVER_API}/votes`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id: emojiId }),
  });

  const json = await response.json();

  const { result } = json;

  if (!result) {
    throw new Error('No result');
  }

  return result;
}
