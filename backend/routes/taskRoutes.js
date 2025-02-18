const express = require('express');
const {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask
} = require('../Controllers/task'); // Adjust the path as necessary
const router = express.Router();

// Create a new task
router.post('/', createTask);

// Get all tasks
router.get('/', getAllTasks);

// Update a task by ID
router.put('/:id', updateTask);

// Delete a task by ID
router.delete('/:id', deleteTask);

module.exports = router;
