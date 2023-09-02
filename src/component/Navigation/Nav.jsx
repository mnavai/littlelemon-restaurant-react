import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
       <nav className="nav-section">
            {/* <img src="" alt="logo"></img> */}
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li>ABOUT</li>
                <li>MENU</li>
                <li><Link to='/booking'>RESERVATIONS</Link></li>
                <li>ORDER ONLINE</li>
                <li>LOGIN</li>
            </ul>
       </nav>
    );
};
export default Nav;