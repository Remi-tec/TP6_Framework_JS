import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Liste des utilisateurs autorisés
  const users = [
    { id: 1, username: "admin", password: "1234" },
    { id: 2, username: "remi", password: "123" },
    { id: 3, username: "teddy", password: "321" }
  ];

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

      // Vérifier si l'utilisateur existe dans la liste
      const user = users.find(u => u.username === username && u.password === password);
      
      if (user) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", username);
        localStorage.setItem("userId", user.id.toString());
        navigate("/dashboard");
      } else {
        setError("Identifiant ou mot de passe incorrect.");
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="input-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>
        
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;