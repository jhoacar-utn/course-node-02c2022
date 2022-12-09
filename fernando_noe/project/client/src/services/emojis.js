/* eslint-disable no-unused-vars */
async function getEmojis(start, limit) {
  const url = `http://localhost:4040/api/v1/emojis?start=${start || 0}&limit=${limit || 10}`;

  const response = await fetch(url);
  const json = await response.json();

  return json.result;
}

async function getEmoji(id) {
  const url = `http://localhost:4040/api/v1/emojis/${id}`;

  const response = await fetch(url);
  const json = await response.json();

  return json.result;
}
