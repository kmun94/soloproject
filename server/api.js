const express = require('express');
const router = express.Router();
const todoController = require('./controllers/todosController');

router.post('/',
 todoController.createTodo,
  (req, res) => {
    res.status(200).json(res.locals.todo);
});

router.get('/',
  todoController.getAllTodo,
  (req, res) => {
    res.status(200).json(res.locals.todo);
});

router.get('/:id',
  todoController.getTodo,
  (req, res) => {
    res.status(200).json(res.locals.todo);
});

router.put('/',
  todoController.updateTodo,
  (req, res) => {
    res.status(200);
});

router.delete('/:id', 
  todoController.deleteTodo,
  (req, res) => {
    res.status(200);
});

module.exports = router;