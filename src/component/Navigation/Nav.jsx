import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
       <nav className="nav-section">
            <div className="logo">
                <img src="./icons_assets/logo.svg" alt="logo"></img>
            </div>
            <div className="nav-links">
                <ul className="links-list">
                    <li className="link-item"><Link to="/">HOME</Link></li>
                    <li className="link-item">ABOUT</li>
                    <li>MENU</li>
                    <li><Link to='/booking'>RESERVATIONS</Link></li>
                    <li>ORDER ONLINE</li>
                    <li>LOGIN</li>
                </ul>
            </div>
       </nav>
    );
};
export default Nav;