const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

const exampleMiddleware = require('../middlewares/example');

router.get('/',             tasksController.index);
router.get('/tasks', exampleMiddleware,tasksController.showTask);
router.get('/tasks/:id',    tasksController.showTaskId);
router.post('/tasks',       tasksController.createTask);
router.put('/tasks/:id',    tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;