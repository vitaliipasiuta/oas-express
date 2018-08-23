const should = require('should');
const request = require('supertest');
const server = require('../../src/app');

const url = '/diff';
const method = 'POST';

describe(`api: ${method} ${url}`, () => {

  it('should return correct diff answer', (done) => {
    request(server)
      .post('/diff')
      .send({a: 3, b: 2})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        res.body.diff.should.eql(1);
        done();
      });
  });

});
