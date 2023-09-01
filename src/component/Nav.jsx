import NavLink from "../component/NavLink";

const Nav = () => {
    return (
       <div className="nav-bar">
            <img src="" alt="logo"></img>
            <NavLink>HOME</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>MENU</NavLink>
            <NavLink>RESERVATIONS</NavLink>
            <NavLink>ORDER ONLINE</NavLink>
            <NavLink>LOGIN</NavLink>
       </div>
    );
}
export default Nav;