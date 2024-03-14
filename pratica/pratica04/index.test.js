const require = require('supertest');
const app = require('./index');

function supertest() {
  return require(app);
}

describe('GET /', () => {
    it('should return 200 OK', async () => {
    const response = await supertest().get('/');
    expect(response.status  === 200);
  });

  describe('POST /', () => {
    it('should return 201 Not Found', async () => {
      const response = await supertest().post('/');
      expect(response.status === 201);
    });
  });

  describe('PUT /', () => { 
    it('should return 200 OK', async () => {
      const response = await supertest().put('/');
      expect(response.status === 200);
    });
  });

  describe('DELETE /', () => {
    it('should return 204 No Content', async () => {
      const response = await supertest().delete('/');
      expect(response.status === 204);
    });
  });

  