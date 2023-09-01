import NavLink from "../NavLink";
import './Nav.css';

const Nav = () => {
    return (
       <nav className="nav-bar">
            {/* <img src="" alt="logo"></img> */}
            <h1>this is a test</h1>
            <NavLink>HOME</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>MENU</NavLink>
            <NavLink>RESERVATIONS</NavLink>
            <NavLink>ORDER ONLINE</NavLink>
            <NavLink>LOGIN</NavLink>
       </nav>
    );
}
export default Nav;