// src/pages/TaskDetail.jsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="container fade-in text-center">
        <div className="card" style={{ maxWidth: "500px", margin: "2rem auto" }}>
          <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
            Tâche introuvable ❌
          </p>
          <Link to="/tasks" className="btn btn-primary">
            Retour à la liste
          </Link>
        </div>
      </div>
    );
  }

  function handleStatusChange(e) {
    updateTask(task.id, { status: e.target.value });
  }

  return (
    <div className="container fade-in">
      <div className="card" style={{ maxWidth: "600px", margin: "2rem auto" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>
          {task.title}
        </h2>

        <p style={{ color: "var(--secondary)", marginBottom: "1.25rem" }}>
          {task.description || "Aucune description fournie."}
        </p>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="status">Statut :</label>
          <select
            id="status"
            value={task.status}
            onChange={handleStatusChange}
          >
            <option value="à faire">À faire</option>
            <option value="en cours">En cours</option>
            <option value="terminée">Terminée</option>
          </select>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1.5rem" }}>
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            ← Retour
          </button>
          <button
            onClick={() => navigate("/tasks")}
            className="btn btn-primary"
          >
            Liste des tâches
          </button>
        </div>
      </div>
    </div>
  );
}
