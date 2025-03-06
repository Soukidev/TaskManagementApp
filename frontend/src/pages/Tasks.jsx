import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/axios";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("medium");
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  // Fetch tasks from backend
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to load tasks", error);
    }
  };

  // Handle task creation & updating
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTask) {
        await updateTask(editingTask._id, {
          title,
          description,
          deadline,
          priority,
        });
      } else {
        await createTask({ title, description, deadline, priority });
      }
      setTitle("");
      setDescription("");
      setDeadline("");
      setPriority("medium");
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      console.error("Error managing task", error);
    }
  };

  // Delete Task
  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    fetchTasks();
  };

  // Edit Task
  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setDeadline(task.deadline.split("T")[0]); // Format date for input
    setPriority(task.priority);
    setEditingTask(task);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Task Management</h1>

      {/* Task Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-xl font-semibold mb-4">
          {editingTask ? "Edit Task" : "Create Task"}
        </h2>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {editingTask ? "Update Task" : "Create Task"}
        </button>
      </form>

      {/* Task List */}
      <div className="w-full max-w-2xl mt-6">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-600">No tasks found</p>
        ) : (
          tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white p-4 rounded shadow-md mb-3 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{task.title}</h3>
                <p className="text-gray-600">{task.description}</p>
                <p
                  className={`text-sm ${
                    task.priority === "high"
                      ? "text-red-500"
                      : task.priority === "medium"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                >
                  Priority: {task.priority}
                </p>
                <p className="text-xs text-gray-500">
                  Due: {new Date(task.deadline).toDateString()}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tasks;
