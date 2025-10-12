// src/utils/auth.js

const TOKEN_KEY = "taskflow_token";

export function login(username, password) {
  // Auth fictive : accepte n'importe quel nom/mot de passe
  if (username && password) {
    localStorage.setItem(TOKEN_KEY, "fake_token_123");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY);
}
