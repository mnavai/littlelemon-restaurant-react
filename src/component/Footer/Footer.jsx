import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer-logo">
                <img src="icons_assets/" alt="logo"></img>
            </div>
            <div className="doormat-nav">
                <h3>OPENING TIMES</h3>
                <ul>
                    <li> Mon - Wed: 10:30AM - 12:00AM</li>
                    <li>Fri: 12:00PM - 1:00AM</li>
                    <li>Sat - Sun: 10:30AM - 12:00AM</li>
                </ul>
            </div>
            <div className="contact-info">
                <h3>CONTACT US</h3>
                <ul>
                    <li>Tel: 123456789</li>
                    <li>Email: johndoe@littlelemon.com</li>
                </ul>
            </div>
            <div className="social-media">
                <h3>SOCIAL MEDIA</h3>
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