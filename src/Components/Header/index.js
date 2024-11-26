import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <h1>MARVEL FANDOM</h1>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item selected">Characters</li>
          <li className="nav-list-item">Comics</li>
          <li className="nav-list-item">Stories</li>
          <li className="nav-list-item">Events</li>
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
