import React, { useState } from "react";
import { createTask } from "../api/axios";  // Importing API function to create task

const CreateTask = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    deadline: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createTask(newTask);  // Sending request to API
      setNewTask({ title: "", description: "", deadline: "" });
      alert("Task created successfully!");
    } catch (err) {
      setError("Failed to create task.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create New Task</h1>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            value={newTask.deadline}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
