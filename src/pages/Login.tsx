import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      // Exemple simple (tu remplaceras par un vrai appel API)
      if (username === "admin" && password === "1234") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        navigate("/dashboard");
      } else {
        setError("Identifiant ou mot de passe incorrect.");
      }
    }, 1000);
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Se connecter</h2>

        <div className="input-group">
          <label>Identifiant</label>
          <div className="input-wrapper">
            <span className="icon">👤</span>
            <input
              type="text"
              placeholder="Entrez votre identifiant"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Mot de passe</label>
          <div className="input-wrapper">
            <span className="icon">🔒</span>
            <input
              type="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
