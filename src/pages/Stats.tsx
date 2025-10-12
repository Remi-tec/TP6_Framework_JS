// src/pages/Stats.jsx
import { useTasks } from "../context/TasksContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Link } from "react-router-dom";

export default function Stats() {
  const { tasks } = useTasks();

  const statusCounts = tasks.reduce(
    (acc, t) => {
      acc[t.status] = (acc[t.status] || 0) + 1;
      return acc;
    },
    { "à faire": 0, "en cours": 0, terminée: 0 }
  );

  const data = Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value,
  }));

  const COLORS = ["#3b82f6", "#fbbf24", "#10b981"]; // bleu, jaune, vert

  return (
    <div className="container fade-in text-center">
      <div className="card" style={{ maxWidth: "600px", margin: "2rem auto" }}>
        <h2 style={{ fontSize: "1.6rem", marginBottom: "1.5rem" }}>
          Statistiques des tâches
        </h2>

        {tasks.length === 0 ? (
          <p>Aucune tâche à afficher pour le moment.</p>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <PieChart width={320} height={320}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        )}

        <div style={{ marginTop: "1.5rem" }}>
          <Link to="/tasks" className="btn btn-primary">
            ← Retour à la liste
          </Link>
        </div>
      </div>
    </div>
  );
}
