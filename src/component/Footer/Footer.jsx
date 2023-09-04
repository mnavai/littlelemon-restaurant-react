import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-bottom-section'>
            <div className="footer-top-section">
                <img src="data:image/png;base64,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" alt="logo"></img>
                <div className="doormat-nav">
                    <h3>OPENING TIMES</h3>
                    <ul className='footer-list'>
                        <li>Mon - Wed: 10:30AM - 12:00AM</li>
                        <li>Fri: 12:00PM - 1:00AM</li>
                        <li>Sat - Sun: 10:30AM - 12:00AM</li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h3>CONTACT US</h3>
                    <ul className='footer-list'>
                        <li>Tel: 123456789</li>
                        <li>Email: johndoe@littlelemon.com</li>
                    </ul>
                </div>
                <div className="social-media">
                    <h3>SOCIAL MEDIA</h3>
                    <ul className='footer-list'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
            <div className='copy-right'>
                <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;