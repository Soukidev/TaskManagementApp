const express = require("express");
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/task");
const protect = require("../middleware/authMiddleware");

const router = express.Router();


router.post("/", protect, createTask);


router.get("/", protect, getTasks);


router.get("/:taskId", protect, getTaskById);


router.put("/:taskId", protect, updateTask);


router.delete("/:taskId", protect, deleteTask);

module.exports = router;
