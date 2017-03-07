const TodoController = require('./todo_controller');

module.exports = (app) => {
  
  // greetings
  app.get('/api', (req, res) => res.send({ hi: 'there' }));

  // todos
  app.get('/api/todos', TodoController.read);
  app.get('/api/todos/:id', TodoController.read);
};