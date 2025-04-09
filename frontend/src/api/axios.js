import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, 
});

// Attach token to requests automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Task API functions
export const createTask = (taskData) => API.post("/tasks", taskData);
export const getTasks = () => API.get("/tasks");
export const updateTask = (taskId, taskData) => API.put(`/tasks/${taskId}`, taskData);
export const deleteTask = (taskId) => API.delete(`/tasks/${taskId}`);

export default API;
