const assert = require('assert');
const request = require('supertest');
const app = require('../app');
const todos = require('../data');

describe('todos controller', () => {

  it('Get to /api/todos returns the list of todos', (done) => {
    request(app)
      .get('/api/todos')
      .send()
      .end((err, res) => {
        assert(res.body.length === todos.length);
        done();
      });
  });

  it('Get to /api/todos/:id returns a particular todo', (done) => {
    request(app)
      .get('/api/todos/1')
      .send()
      .end((err, res) => {
        assert(res.body.id === 1);
        done();
      });
  });

});