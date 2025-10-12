// src/context/TasksContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const TasksContext = createContext();

export function useTasks() {
  return useContext(TasksContext);
}

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), ...task, status: "à faire" },
    ]);
  };

  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTaskTitle = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
    );
  };
  
  return (
    <TasksContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, editTaskTitle }}
    >
      {children}
    </TasksContext.Provider>
  );
};
// src/context/TasksContext.jsx (ajout d'une fonction)

  