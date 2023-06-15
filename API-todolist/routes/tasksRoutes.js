const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

const exampleMiddleware = require('../middlewares/example');

router
  .get('/',             tasksController.index)
  .get('/tasks', exampleMiddleware,tasksController.showTask)
  .get('/tasks/:id',    tasksController.showTaskId)
  .post('/tasks',       tasksController.createTask)
  .put('/tasks/:id',    tasksController.updateTask)
  .delete('/tasks/:id', tasksController.deleteTask)

module.exports = router;