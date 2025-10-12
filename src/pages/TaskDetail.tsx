// src/pages/TaskDetail.jsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import { useState } from "react";

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks, updateTask } = useTasks();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === Number(id));

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task?.title || "");
  const [editedDescription, setEditedDescription] = useState(task?.description || "");
  const [editedDueDate, setEditedDueDate] = useState(task?.dueDate || "");

  if (!task) {
    return (
      <div className="container fade-in text-center">
        <div className="card" style={{ maxWidth: "500px", margin: "2rem auto" }}>
          <p>Tâche introuvable ❌</p>
          <Link to="/tasks" className="btn btn-primary">Retour à la liste</Link>
        </div>
      </div>
    );
  }

  function handleStatusChange(e) {
    updateTask(task.id, { status: e.target.value });
  }

  function handleSave() {
    if (editedTitle.trim().length < 3) {
      alert("Le titre doit contenir au moins 3 caractères.");
      return;
    }
    updateTask(task.id, {
      title: editedTitle,
      description: editedDescription,
      dueDate: editedDueDate,
    });
    setIsEditing(false);
  }

  const formatDate = (iso) =>
    new Date(iso).toLocaleString("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
    });

  // ⚠️ Vérification du retard
  const isLate =
    task.dueDate &&
    new Date(task.dueDate).getTime() < Date.now() &&
    task.status !== "terminée";

  return (
    <div className="container fade-in">
      <div className="card" style={{ maxWidth: "600px", margin: "2rem auto" }}>
        {/* ---- Mode édition ---- */}
        {isEditing ? (
          <>
            <label htmlFor="title">Titre :</label>
            <input
              id="title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />

            <label htmlFor="description">Description :</label>
            <textarea
              id="description"
              rows="3"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />

            <label htmlFor="dueDate">Date d’échéance :</label>
            <input
              id="dueDate"
              type="date"
              value={editedDueDate}
              onChange={(e) => setEditedDueDate(e.target.value)}
            />
          </>
        ) : (
          <>
            <h2 style={{ marginBottom: "0.75rem" }}>{task.title}</h2>
            <p style={{ color: "var(--secondary)", marginBottom: "1rem" }}>
              {task.description || "Aucune description fournie."}
            </p>

            <p>
              <strong>Date d’échéance :</strong>{" "}
              {task.dueDate ? (
                <span>
                  {new Date(task.dueDate).toLocaleDateString("fr-FR")}
                  {isLate && (
                    <span style={{ color: "red", fontWeight: "600", marginLeft: "0.5rem" }}>
                      ⏰ En retard !
                    </span>
                  )}
                </span>
              ) : (
                "Non définie"
              )}
            </p>
          </>
        )}

        <div style={{ marginTop: "1rem" }}>
          <label>Statut :</label>
          <select value={task.status} onChange={handleStatusChange}>
            <option value="à faire">À faire</option>
            <option value="en cours">En cours</option>
            <option value="terminée">Terminée</option>
          </select>
        </div>

        {/* ---- Dates info ---- */}
        <hr style={{ margin: "1.5rem 0", border: "1px solid var(--border)" }} />
        <p style={{ fontSize: "0.9rem", color: "var(--secondary)" }}>
          🕒 Créée le : {formatDate(task.createdAt)}
        </p>
        <p style={{ fontSize: "0.9rem", color: "var(--secondary)" }}>
          🔁 Dernière mise à jour : {formatDate(task.updatedAt)}
        </p>

        {/* ---- Boutons ---- */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            ← Retour
          </button>

          {!isEditing ? (
            <button onClick={() => setIsEditing(true)} className="btn btn-primary">
              ✏️ Éditer
            </button>
          ) : (
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={handleSave} className="btn btn-success">
                💾 Enregistrer
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setEditedTitle(task.title);
                  setEditedDescription(task.description || "");
                  setEditedDueDate(task.dueDate || "");
                }}
                className="btn btn-danger"
              >
                ❌ Annuler
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
