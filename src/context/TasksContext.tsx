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

  // ➕ Ajouter une tâche
  const addTask = (task) => {
    const now = new Date().toISOString();
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...task,
        status: "à faire",
        createdAt: now,
        updatedAt: now,
      },
    ]);
  };

  // 🔄 Mettre à jour une tâche
  const updateTask = (id, updates) => {
    const now = new Date().toISOString();
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...updates, updatedAt: now } : t
      )
    );
  };

  // 🗑️ Supprimer
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const editTaskTitle = (id, newTitle) => {
    const now = new Date().toISOString();
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, title: newTitle, updatedAt: now } : t
      )
    );
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, editTaskTitle }}
    >
      {children}
    </TasksContext.Provider>
  );
}
