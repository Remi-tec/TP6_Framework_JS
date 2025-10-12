// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import TaskDetail from "./pages/TaskDetail";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import { TasksProvider } from "./context/TasksContext";

const Stats = lazy(() => import("./pages/Stats")); // Lazy loading 👈

function App() {
  return (
    <TasksProvider>
      <Suspense fallback={<div className="p-6 text-center">Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <Tasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/new"
            element={
              <ProtectedRoute>
                <NewTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tasks/:id"
            element={
              <ProtectedRoute>
                <TaskDetail />
              </ProtectedRoute>
            }
          />

          {/* Lazy loaded stats */}
          <Route
            path="/stats"
            element={
              <ProtectedRoute>
                <Stats />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </TasksProvider>
  );
}

export default App;
