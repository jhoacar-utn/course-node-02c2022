/* global describe, test, expect */
/* eslint import/no-unresolved: "off" */
const request = require('supertest');

const app = require('./server');

describe('Testing sobre la request', () => {
  describe('Testing sobre la ruta /params usando request.params', () => {
    test('GET /params - deberia ser 404 Not Found', async () => {
      await request(app)
        .get('/test')
        .expect(404);
    });

    test.skip('GET /params/:first/:second/ - deberia devolver un JSON con el contenido de "req.params"', async () => {
      await request(app)
        .get('/params/primero/opcional')
        .expect(200)
        .expect((response) => {
          expect(response.body).toEqual({
            first: 'primero',
            second: 'opcional',
          });
        });
    });

    test.skip('GET /params/:first/:second?/ - deberia devolver un JSON con el contenido de "req.params"', async () => {
      await request(app)
        .get('/params/primero')
        .expect(200)
        .expect((response) => {
          expect(response.body).toEqual({
            first: 'primero',
          });
        });
    });
  });

  describe('Testing sobre la ruta /query usando request.query', () => {
    test.skip('GET /query - deberia ser 200 OK', async () => {
      await request(app)
        .get('/query')
        .expect(200);
    });

    test.skip('GET /query?clave=valor - deberia devolver un JSON con el contenido de "req.query"', async () => {
      await request(app)
        .get('/query?nombre=pedro')
        .expect(200)
        .expect((response) => {
          expect(response.body).toEqual({
            nombre: 'pedro',
          });
        });
    });
  });

  describe('Testing sobre la ruta /body', () => {
    test.skip('POST /body - debe ser 200 OK', async () => {
      await request(app)
        .post('/body')
        .expect(200);
    });
  });

  describe('Testing sobre la ruta /body usando request.body (application/json)', () => {
    test.skip('POST /body - deberia devolver un JSON con el contenido de "req.body"', async () => {
      await request(app)
        .post('/body')
        .send({
          nombre: 'pedro',
        })
        .expect(200)
        .expect((response) => {
          expect(response.body).toEqual({
            nombre: 'pedro',
          });
        });
    });
  });

  describe('Testing sobre la ruta /body usando request.body (application/x-www-form-urlencoded)', () => {
    test.skip('POST /body - deberia devolver un JSON con el contenido de "req.body"', async () => {
      await request(app)
        .post('/body')
        .type('form')
        .send({
          nombre: 'pedro',
        })
        .expect(200)
        .expect((response) => {
          expect(response.body).toEqual({
            nombre: 'pedro',
          });
        });
    });
  });

  describe('Testing sobre la ruta /body usando request.body (multipart/form-data)', () => {
    test.skip('POST /body - deberia devolver un JSON con el contenido de "req.body"', async () => {
      await request(app)
        .post('/body')
        .field('nombre', 'pedro')
        .expect(200)
        .expect((response) => {
          expect(response.body).toEqual({
            nombre: 'pedro',
          });
        });
    });
  });
});
