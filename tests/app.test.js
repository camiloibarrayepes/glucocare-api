
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responde con 200 y un mensaje JSON', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
});