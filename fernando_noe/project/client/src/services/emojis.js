const SERVER_HOST = import.meta.env.VITE_BASE_URL || '';

const SERVER_API = `${SERVER_HOST}/api/v1`;

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
