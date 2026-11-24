
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responde con 200 y un mensaje JSON', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
});

describe('GET /patients', () => {
  it('responde con 200 y la lista de pacientes', async () => {
    const res = await request(app).get('/patients');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(2);
  });
});

describe('GET /patients/:id', () => {
  it('responde con 200 y el paciente solicitado', async () => {
    const res = await request(app).get('/patients/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('insulinShots');
    expect(res.body).toHaveProperty('medications');
  });

  it('responde con 404 si el paciente no existe', async () => {
    const res = await request(app).get('/patients/999');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});

describe('GET /patients/:id/insulin-shots', () => {
  it('responde con 200 y las dosis de insulina del paciente', async () => {
    const res = await request(app).get('/patients/1/insulin-shots');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('units');
    expect(res.body[0]).toHaveProperty('type');
  });
});

