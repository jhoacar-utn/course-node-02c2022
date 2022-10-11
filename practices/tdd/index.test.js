/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/**
 * Test de ejemplo para verificar que el socket por el puerto 8888
 * se encuentre habilitado
 */
const axios = require('axios');

const url = 'http://localhost:8888';

describe('Testing sobre el puerto 8888 usando promesas', () => {
  test('then/catch - Deberia existir un servicio por el puerto 8888', () => expect(axios.get(url)).resolves.not.toBe(null));

  test('async/await - Deberia existir un servicio por el puerto 8888', async () => {
    await expect(axios.get(url)).resolves.not.toBe(null);
  });
});
