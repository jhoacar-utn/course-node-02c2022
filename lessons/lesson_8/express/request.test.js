const request = require('supertest');

const params = require('./requests/params');
const query = require('./requests/query');
const body = require('./requests/body');

describe('Testing sobre la request', () => {
  
  describe('Deberia controlar los parametros de la URL', () => {
    test('Deberia mostrar un codigo de estado 404', async () => {
      await request(params)
        .get('/usuario')
        .expect(404);
    });

    test('Deberia mostrar un nombre', async () => {
      await request(params)
        .get('/usuario/pedro')
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
        });
    });

    test('Deberia mostrar un nombre y el apellido', async () => {
      await request(params)
        .get('/usuario/pedro/perez')
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
          expect(response.text).toContain('perez');
        });
    });
  });

  describe('Deberia controlar la query de la URL', () => {
    test('Deberia mostrar un codigo de estado 200', async () => {
      await request(query)
        .get('/usuario')
        .expect(200);
    });

    test('Deberia mostrar un nombre', async () => {
      await request(query)
        .get('/usuario?nombre=pedro')
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
        });
    });

    test('Deberia mostrar un nombre y el apellido', async () => {
      await request(query)
        .get('/usuario/?nombre=pedro&apellido=perez')
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
          expect(response.text).toContain('perez');
        });
    });
  });

  describe('Deberia controlar el body de la Request (JSON - application/json)', () => {
    test('Deberia mostrar un codigo de estado 200', async () => {
      await request(body)
        .post('/usuario')
        .expect(200);
    });

    test('Deberia mostrar un nombre', async () => {
      await request(body)
        .post('/usuario')
        .send({
          nombre: 'pedro',
        })
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
        });
    });

    test('Deberia mostrar un nombre y el apellido', async () => {
      await request(body)
        .post('/usuario')
        .send({
          nombre: 'pedro',
          apellido: 'perez',
        })
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
          expect(response.text).toContain('perez');
        });
    });
  });

  describe('Deberia controlar el body de la Request (Form - application/x-www-form-urlencoded)', () => {
    test('Deberia mostrar un codigo de estado 200', async () => {
      await request(body)
        .post('/usuario')
        .type('form')
        .expect(200);
    });

    test('Deberia mostrar un nombre', async () => {
      await request(body)
        .post('/usuario')
        .type('form')
        .send({
          nombre: 'pedro',
        })
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
        });
    });

    test('Deberia mostrar un nombre y el apellido', async () => {
      await request(body)
        .post('/usuario')
        .type('form')
        .send({
          nombre: 'pedro',
          apellido: 'perez',
        })
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
          expect(response.text).toContain('perez');
        });
    });
  });

  describe('Deberia controlar el body de la Request (Form - multipart/form-data)', () => {
    test('Deberia mostrar un codigo de estado 200', async () => {
      await request(body)
        .post('/usuario')
        .expect(200);
    });

    test('Deberia mostrar un nombre', async () => {
      await request(body)
        .post('/usuario')
        .field('nombre','pedro')
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
        });
    });

    test('Deberia mostrar un nombre y el apellido', async () => {
      await request(body)
        .post('/usuario')
        .field('nombre','pedro')
        .field('apellido','perez')
        .expect(200)
        .expect((response) => {
          expect(response.text).toContain('pedro');
          expect(response.text).toContain('perez');
        });
    });
  });
});
