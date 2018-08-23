const should = require('should');
const request = require('supertest');
const server = require('../../src/app');

const url = '/add';
const method = 'POST';

describe(`api: ${method} ${url}`, () => {

  it('should return correct sum answer', (done) => {
    request(server)
      .post('/add')
      .send({a: 1, b: 2})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        res.body.sum.should.eql(3);
        done();
      });
  });

});
