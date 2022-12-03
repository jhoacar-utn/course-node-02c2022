const SERVER_HOST = import.meta.env.VITE_BASE_URL || '';

const SERVER_API = `${SERVER_HOST}/api/v1`;
/**
 * This function make a request to register a new user
 * @param {Object} userData
 * @return {Promise<Object>}
 */
export async function registerUser({ name, email, password }) {
  if (!name || !email || !password) {
    throw new Error('Se necesitan todos los campos para el registro');
  }
  const url = `${SERVER_API}/users`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const json = await response.json();

  const { result } = json;

  if (!result) {
    throw new Error('No hay resultado, por lo tanto no se ha registrado el usuario');
  }

  return result;
}
