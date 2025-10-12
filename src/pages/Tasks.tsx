// src/pages/Tasks.jsx
import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import { logout } from "../utils/auth";
import useTheme from "../hooks/useTheme";
import { useState } from "react";

export default function Tasks() {
  const { tasks, deleteTask, editTaskTitle } = useTasks();
  const [filter, setFilter] = useState("toutes");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const { darkMode, toggleTheme } = useTheme();

  const filteredTasks =
    filter === "toutes" ? tasks : tasks.filter((t) => t.status === filter);

  function startEdit(task) {
    setEditingId(task.id);
    setEditValue(task.title);
  }

  function saveEdit(id) {
    if (editValue.trim().length > 2) {
      editTaskTitle(id, editValue);
    }
    setEditingId(null);
  }

  return (
    <div className="container fade-in">
      {/* ---- HEADER ---- */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <h1 style={{ fontSize: "1.8rem", fontWeight: "700" }}>Mes tâches</h1>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={toggleTheme}
            className="btn btn-secondary"
            title="Changer de thème"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          <Link to="/tasks/new" className="btn btn-primary">
            + Nouvelle tâche
          </Link>

          <Link to="/stats" className="btn btn-success">
            Statistiques
          </Link>

          <button
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
            className="btn btn-secondary"
          >
            Déconnexion
          </button>
        </div>
      </div>

      {/* ---- FILTRES ---- */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        {["toutes", "à faire", "en cours", "terminée"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`btn ${
              filter === status ? "btn-primary" : "btn-secondary"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* ---- LISTE ---- */}
      {filteredTasks.length === 0 ? (
        <p>Aucune tâche trouvée.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="card"
              style={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ flex: 1 }}>
                {editingId === task.id ? (
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onBlur={() => saveEdit(task.id)}
                    onKeyDown={(e) => e.key === "Enter" && saveEdit(task.id)}
                    autoFocus
                  />
                ) : (
                  <span
                    onDoubleClick={() => startEdit(task)}
                    style={{
                      fontWeight: "500",
                      color: "var(--primary)",
                      cursor: "pointer",
                    }}
                  >
                    {task.title}
                  </span>
                )}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--secondary)",
                    marginTop: "0.25rem",
                  }}
                >
                  {task.status}
                </p>
              </div>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Link to={`/tasks/${task.id}`} className="btn btn-success">
                  Voir
                </Link>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="btn btn-danger"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
