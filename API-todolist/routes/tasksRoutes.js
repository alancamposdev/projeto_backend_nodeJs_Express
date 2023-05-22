const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

const exampleMiddleware = require('../middlewares/example');

router.get('/',             tasksController.index);
router.get('/tasks',        tasksController.showTask);
router.get('/tasks/:id',    tasksController.showTask);
router.post('/tasks',       tasksController.createTask);
router.put('/tasks/:id',    tasksController.updateTask);
router.delete('/tasks/:id', tasksController.deleteTask);

module.exports = router;