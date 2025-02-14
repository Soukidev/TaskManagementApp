const Task = require('../models/taskModel');


const createTask = async (req, res) => {
  try {
    const { title, description, deadline } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const task = new Task({
      userId: req.user.id, 
      title,
      description,
      deadline,
    });

    await task.save();
    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);

    if (!task || task.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);

    if (!task || task.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: "Task not found" });
    }

    const { title, description, deadline, status } = req.body;

    task.title = title || task.title;
    task.description = description || task.description;
    task.deadline = deadline || task.deadline;
    task.status = status || task.status;

    await task.save();
    res.status(200).json({ message: "Task updated successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);

    if (!task || task.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createTask, getTasks, getTaskById, updateTask, deleteTask };
