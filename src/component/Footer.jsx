import NavLink from "./NavLink"

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src="icons_assets/" alt="logo"></img>
            </div>
            <div className="doormat-nav">
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Menu</NavLink>
                <NavLink>Reservations</NavLink>
                <NavLink>Order Online</NavLink>
                <NavLink>Login</NavLink>
            </div>
            <div className="contact-info">
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="social-media">
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;