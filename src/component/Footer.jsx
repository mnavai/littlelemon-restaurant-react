import Nav from "./Navigation/Nav";
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="logo">
                <img src="icons_assets/" alt="logo"></img>
            </div>
            <div className="doormat-nav">
                <Nav></Nav>
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
    );
};

export default Footer;