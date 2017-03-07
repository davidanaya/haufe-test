const todos = require('../data');

module.exports = {

  read(req, res, next) {
    const todoId = Number(req.params.id);
    let result = todoId ? todos.find(todo => todo.id === todoId) : todos;
    res.send(result);
  }

};