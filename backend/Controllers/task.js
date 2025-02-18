const Task = require('../models/task-model');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, status, priority, deadline } = req.body;

    // Ensure user is authenticated and user ID is available
    const userId = req.user.id; // Assuming you have user authentication middleware

    const task = new Task({
      title,
      description,
      status,
      priority,
      deadline,
      user: userId, // Associate the task with the authenticated user
    });

    await task.save();
    res.status(201).json({ success: true, task });
  } catch (error) {
    console.error('Task creation error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id, user: req.user.id },
            req.body,
            { new: true, runValidators: true }
        );
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
