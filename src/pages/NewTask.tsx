// src/pages/NewTask.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

export default function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");
  const { addTask } = useTasks();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length < 3) {
      setError("Le titre doit contenir au moins 3 caractères.");
      return;
    }
    addTask({ title, description, dueDate });
    navigate("/tasks");
  }

  return (
    <div className="container fade-in" style={{ display: "flex", justifyContent: "center" }}>
      <div className="card" style={{ width: "100%", maxWidth: "500px" }}>
        <h2 className="text-center mb-4">Nouvelle tâche</h2>

        {error && (
          <p style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Titre</label>
            <input
              id="title"
              type="text"
              placeholder="Titre de la tâche"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Description (facultatif)"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="dueDate">Date d’échéance</label>
            <input
              id="dueDate"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Ajouter la tâche
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={() => navigate("/tasks")}
            className="btn btn-secondary"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
