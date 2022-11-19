/**
 * This function save the token in the local storage
 * @param {string} token
 */
export function setToken(token) {
  localStorage.setItem('token', token);
}
/**
 * This function return the token saved in the local storage
 * @return {string}
 */
export function getToken() {
  return localStorage.getItem('token');
}
/**
 * This function remove the token from local storage
 */
export function removeToken() {
  localStorage.removeItem('token');
}
