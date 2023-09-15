import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
      <nav className="nav-section">
        <div className="nav-logo">
          <img
            src="https://little-lemon-weld.vercel.app/static/media/logo.7aa41df0270b68cbabda.jpg"
            alt="logo"
          ></img>
        </div>
        <nav className="nav-links">
          <ul className="links-list">
            <li className="link-item">
              <Link to="/" className="link">
                HOME
              </Link>
            </li>
            <li className="link-item">ABOUT</li>
            <li>MENU</li>
            <li>
              <Link to="/booking" className="link">
                RESERVATIONS
              </Link>
            </li>
            <li>ORDER ONLINE</li>
            <li>LOGIN</li>
          </ul>
        </nav>
      </nav>
    );
};
export default Nav;