import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>MARVEL FANDOM</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Characters
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/comics"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Comics
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/stories"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Stories
            </NavLink>
          </li>
          <li className="nav-list-item">
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="login-register">
        <p className="login">Login</p>
        <p className="register">Register</p>
      </div>
    </header>
  );
};

export default Header;
