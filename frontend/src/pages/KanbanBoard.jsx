import React, { useState, useEffect } from "react";
import { getTasks, updateTask } from "../api/axios";  // Importing API functions to get tasks and update task
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";  // Importing drag-and-drop context and components

const KanbanBoard = () => {
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

  // Handle the drag and drop logic
  const handleDragEnd = async (result) => {
    const { destination, source } = result;
    if (!destination || destination.index === source.index) return; // No movement happened

    const taskId = tasks[source.index]._id;
    const updatedTask = {
      ...tasks[source.index],
      status: destination.droppableId, // Status is updated based on the column (droppableId)
    };

    try {
      // Update task status via the API
      await updateTask(taskId, updatedTask);
      // Reorder tasks in the local state
      const updatedTasks = Array.from(tasks);
      updatedTasks.splice(source.index, 1); // Remove the task from its original position
      updatedTasks.splice(destination.index, 0, updatedTask); // Insert it in the new position
      setTasks(updatedTasks);  // Update the state with the new task order
    } catch (error) {
      setError("Failed to update task status.");
    }
  };

  return (
    <div>
      <h1>Kanban Board</h1>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="kanban-columns">
          {["To Do", "In Progress", "Done"].map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div
                  className="kanban-column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ minHeight: "200px", border: "1px solid #ccc", padding: "10px", margin: "10px", backgroundColor: "#f4f4f4" }}
                >
                  <h2>{status}</h2>
                  <ul>
                    {tasks
                      .filter((task) => task.status === status)
                      .map((task, index) => (
                        <Draggable key={task._id} draggableId={task._id} index={index}>
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                ...provided.draggableProps.style,
                                padding: "10px",
                                marginBottom: "10px",
                                backgroundColor: "#fff",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                              }}
                            >
                              <h3>{task.title}</h3>
                              <p>{task.description}</p>
                              <p>Deadline: {task.deadline}</p>
                            </li>
                          )}
                        </Draggable>
                      ))}
                  </ul>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
