import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Livres">Livres</Link>
        </li>
        <li>
          <Link to="/Form">Integration</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
       
      </ul>
      <Outlet />
    </nav>
  );
};

export default Layout;
