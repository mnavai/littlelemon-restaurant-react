import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
       <nav className="nav-section">
            {/* <img src="" alt="logo"></img> */}
            <ul className="links-list">
                <li className="link-item"><Link to="/">HOME</Link></li>
                <li className="link-item">ABOUT</li>
                <li>MENU</li>
                <li><Link to='/booking'>RESERVATIONS</Link></li>
                <li>ORDER ONLINE</li>
                <li>LOGIN</li>
            </ul>
       </nav>
    );
};
export default Nav;