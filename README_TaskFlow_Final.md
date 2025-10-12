# TaskFlow — Gestionnaire de tâches (Projet React)

## Mode d'emploi

1. **Connexion initiale**
   - Lors de la première ouverture, saisissez le mot de passe demandé (fictif donc pas d'utilisateur enregistré).
   - Vous accédez alors à la page principale de gestion des tâches.

2. **Créer une tâche**
   - Cliquez sur “Ajouter une tâche” depuis la page d’accueil.
   - Saisissez :
     - Un **titre** (obligatoire, ≥ 3 caractères)
     - Une **description** (facultative)
     - Une **date d’échéance** (facultative)
   - Validez avec “Ajouter la tâche”.

3. **Consulter et modifier une tâche**
   - Cliquez sur une tâche dans la liste pour ouvrir sa page de détail.
   - Vous pouvez :
     - Modifier le titre, la description ou la date d’échéance.
     - Mettre à jour le statut (“à faire”, “en cours”, “terminée”).
     - Supprimer la tâche si nécessaire.

4. **Visualiser les statistiques**
   - Accédez à la page “Statistiques” pour voir la répartition des tâches.

5. **Gestion automatique**
   - Les tâches sont enregistrées dans le **localStorage** (persistance locale).
   - La date de création et la dernière mise à jour sont gérées automatiquement.

---


| Critère | Description | Fichiers concernés |
|----------|--------------|--------------------|
| **Structure du projet et composants React** | Organisation modulaire des pages et composants | `/src/pages/`, `/src/context/TasksContext.jsx` |
| **Création de tâche** | Formulaire avec titre, description, date d’échéance, validation | `/src/pages/NewTask.jsx`, `/src/context/TasksContext.jsx` |
| **Affichage des tâches** | Liste interactive avec actions de suppression et de mise à jour de statut | `/src/pages/Tasks.jsx` |
| **Détail d’une tâche** | Page dédiée avec édition, affichage des dates, indicateur de retard | `/src/pages/TaskDetail.jsx` |
| **Mise à jour des données** | Fonction `updateTask()` avec gestion de `updatedAt` automatique | `/src/context/TasksContext.jsx` |
| **Persistance des données** | Sauvegarde automatique dans `localStorage` | `/src/context/TasksContext.jsx` |
| **Suppression d’une tâche** | Suppression directe dans la liste | `/src/pages/Tasks.jsx`, `/src/context/TasksContext.jsx` |
| **Visualisation graphique** | Graphique circulaire avec Recharts | `/src/pages/Stats.jsx` |
| **Gestion d’erreur (404)** | Page personnalisée pour routes inexistantes | `/src/pages/NotFound.jsx` |
| **Responsive et design** | CSS pur, cohérent, clair | `/src/index.css` |
| **Dates automatiques** | `createdAt` et `updatedAt` gérées par contexte | `/src/context/TasksContext.jsx` |

---

## Structure simplifiée du projet

```
src/
├── context/
│   └── TasksContext.jsx      # Gestion centralisée des tâches et persistance
├── pages/
│   ├── Tasks.jsx             # Liste principale des tâches
│   ├── NewTask.jsx           # Formulaire de création
│   ├── TaskDetail.jsx        # Détails et édition d’une tâche
│   ├── Stats.jsx             # Statistiques globales
│   └── NotFound.jsx          # Page d’erreur 404
├── App.jsx                   # Routes et structure générale
├── main.jsx                  # Point d’entrée React
└── index.css                 # Styles globaux du projet (CSS pur)
```
