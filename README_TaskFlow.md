# 🚀 TaskFlow – Gestionnaire de tâches réactif

Application monopage (**SPA**) développée en **React** permettant à un utilisateur de gérer ses tâches :  
création, édition, suppression, filtrage, consultation et statistiques.

---

## 📦 Installation

### 1️⃣ Cloner le projet
```bash
git clone https://github.com/votre-utilisateur/taskflow.git
cd taskflow
```

### 2️⃣ Installer les dépendances
```bash
npm install
```

### 3️⃣ Lancer le serveur de développement
```bash
npm run dev
```

### 4️⃣ Ouvrir dans le navigateur
👉 [http://localhost:5173](http://localhost:5173)

---

## 🧱 Structure du projet

```
taskflow/
 ┣ src/
 ┃ ┣ components/          → (Composants génériques)
 ┃ ┣ context/
 ┃ ┃ ┗ TasksContext.jsx   → Gestion de l’état global et persistance
 ┃ ┣ hooks/
 ┃ ┃ ┗ useTheme.js        → Hook personnalisé pour le mode sombre
 ┃ ┣ pages/
 ┃ ┃ ┣ Login.jsx          → Page de connexion fictive
 ┃ ┃ ┣ Tasks.jsx          → Liste et gestion des tâches
 ┃ ┃ ┣ NewTask.jsx        → Formulaire d’ajout
 ┃ ┃ ┣ TaskDetail.jsx     → Détail et changement de statut
 ┃ ┃ ┣ Stats.jsx          → Statistiques (lazy loading + Recharts)
 ┃ ┃ ┗ NotFound.jsx       → Page 404
 ┃ ┣ routes/
 ┃ ┃ ┗ ProtectedRoute.jsx → Protection des routes privées
 ┃ ┣ utils/
 ┃ ┃ ┗ auth.js            → Fonctions d’authentification simulée
 ┃ ┣ App.jsx              → Définition des routes principales
 ┃ ┗ main.jsx             → Point d’entrée React
 ┣ package.json
 ┣ README.md
 ┗ tailwind.config.js
```

---

## 🌐 Routes principales

| Route | Description | Protection |
|-------|--------------|-------------|
| `/login` | Connexion fictive (stocke un token dans localStorage) | ❌ |
| `/tasks` | Liste des tâches (CRUD, filtres, édition inline) | ✅ |
| `/tasks/new` | Création d’une tâche | ✅ |
| `/tasks/:id` | Détail et changement de statut | ✅ |
| `/stats` | Statistiques (lazy loaded, Recharts) | ✅ |
| `*` | Page 404 | ❌ |

---

## ⚙️ Fonctionnalités principales

### 🔐 Authentification simulée
- Connexion simple avec stockage d’un token dans `localStorage`
- Protection automatique des routes grâce à `ProtectedRoute`

### 📝 Gestion des tâches
- Ajout, suppression et édition de tâches
- Modification du **statut** (à faire / en cours / terminée)
- Persistance locale via `localStorage`
- Édition **inline** (double-clic sur le titre)

### 🎚️ Filtres
- Affichage par statut : toutes, à faire, en cours, terminée

### 📊 Statistiques
- Graphique en **secteurs** via **Recharts**
- Chargement **lazy** de la page `/stats`

### 🌗 Mode sombre / clair
- Stocké dans `localStorage`
- Basculable via un simple bouton (☀️ / 🌙)

### 🧭 Routing complet
- Navigation fluide entre toutes les pages
- Redirection automatique après login
- Gestion des routes inexistantes (404)

---

## 💅 Design & UX
- UI minimaliste avec **TailwindCSS**
- Responsive, claire et réactive
- Transitions douces et thème sombre agréable

---

## 🧠 Technologies utilisées

| Domaine | Outil / Librairie |
|----------|-------------------|
| Framework | React 18 |
| Router | React Router DOM |
| Graphiques | Recharts |
| CSS | TailwindCSS |
| Gestion d’état | Context API |
| Persistance | localStorage |
| Outils | Vite, ES Modules |

---

## 🧾 Notes techniques
- Les données sont **persistées localement** (aucun backend).
- Le token de connexion est **fictif** (`fake_token_123`).
- La page `/stats` est chargée en **lazy loading** pour optimiser les performances.
- La validation des formulaires impose un **titre obligatoire** (min 3 caractères).

---

## 🏁 Lancer la version de production
```bash
npm run build
npm run preview
```

---

## 💡 Idées d’améliorations (bonus)
- 🧩 Intégrer un vrai backend (Express / Firebase)
- 📅 Ajouter des dates d’échéance
- 🔔 Notifications locales
- 📱 Optimiser pour mobile
- 📦 Export / import de tâches (JSON)

---

## 👨‍💻 Auteur
**Projet : TaskFlow**  
Formation Frontend – Projet Final  
🧠 Technologies : React, React Router, Context API, TailwindCSS, Recharts  
📅 Durée estimée : 6 à 8 heures  
