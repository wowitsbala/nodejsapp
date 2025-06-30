const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/');
    assert.equal(res.status, 200);
    assert.equal(res.body.message, 'Hello from Node.js!');
  });
});
