import React, { useState, useEffect } from "react";
import { getTasks } from "../api/axios";  // Importing API function to get tasks

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (err) {
        setError("Failed to load tasks.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={() => window.location.href = "/create-task"}>Create New Task</button>
        <button onClick={() => window.location.href = "/kanban-board"}>Go to Kanban Board</button>
      </div>

      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Deadline: {task.deadline}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
