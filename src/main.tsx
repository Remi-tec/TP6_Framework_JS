import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';
import Stats from './pages/Stats';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
const router = createBrowserRouter([
{
path: '/',
element: <App />, // layout racine
children: [
{ index: true, element: <Home /> },
{ path: 'about', element: <About /> },
{ path: 'login', element: <Login /> },
{ path: 'tasks', element: <Tasks /> },
{ path: 'stats', element: <Stats /> },
{ path: '*', element: <NotFound/> },
],
},
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);