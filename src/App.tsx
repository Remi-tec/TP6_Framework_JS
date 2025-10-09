import { Link, NavLink, Outlet } from 'react-router-dom';

export default function App(){
return (
<div>
<nav>
<NavLink to="/" end>Home</NavLink>
<NavLink to="/about">About</NavLink>
</nav>
<Outlet />
</div>);}