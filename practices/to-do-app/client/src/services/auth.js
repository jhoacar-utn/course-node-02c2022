const SERVER_HOST = import.meta.env.VITE_BASE_URL || '';

const SERVER_API = `${SERVER_HOST}/api/v1`;
/**
 * This function make a request to auth an user
 * Return a token
 * @param {Object} userData
 * @return {Promise<String>}
 */
export async function loginUser({ email, password }) {
  if (!email || !password) {
    throw new Error('Se necesitan todos los campos para el registro');
  }
  const url = `${SERVER_API}/auth`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const json = await response.json();

  const { result } = json;

  const { token } = result;

  if (!token) {
    throw new Error('El servidor no ha mandado un token');
  }

  return token;
}
