const express = require('express');
const { 
  getAllTasks, 
  createTask, 
  updateTask, 
  deleteTask 
} = require('../Controllers/task.js');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.use(protect); // Protect all routes

router.route('/')
  .get(getAllTasks)
  .post(createTask);

router.route('/:id')
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;