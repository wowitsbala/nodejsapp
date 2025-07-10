const request = require('supertest');
const app = require('../src/index');
const assert = require('assert');

describe('Express App', () => {
  it('should return Hello from Node.js! on GET /', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.message, 'Hello from Node.js!');
        done();
      });
  });
});
