import { Link, NavLink, Outlet } from 'react-router-dom';

export default function App(){
return (
<div>
<nav>
<NavLink to="/" end>Home</NavLink>
<NavLink to="/login">Login</NavLink>
<NavLink to="/tasks">tasks</NavLink>
<NavLink to="/stats">stats</NavLink>
</nav>
<Outlet />
</div>);}