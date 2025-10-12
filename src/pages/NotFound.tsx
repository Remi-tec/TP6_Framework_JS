// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="container fade-in"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div className="card" style={{ padding: "3rem 2rem", maxWidth: "500px" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "700",
            color: "var(--primary)",
            marginBottom: "1rem",
          }}
        >
          404
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Oups 😅 Cette page n’existe pas ou a été déplacée.
        </p>

        <Link to="/tasks" className="btn btn-primary">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  );
}
