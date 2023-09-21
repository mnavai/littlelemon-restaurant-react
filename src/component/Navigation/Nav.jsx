import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  // Use state to track the visibility of the mobile menu
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <div className="nav-section">
      <div className="nav-logo">
        <img
          src="https://little-lemon-weld.vercel.app/static/media/logo.7aa41df0270b68cbabda.jpg"
          alt="logo"
        ></img>
      </div>
      <button
        className={`mobile-menu-button ${mobileMenuVisible ? "active" : ""}`}
        onClick={toggleMobileMenu}
      >
        &#9776;
      </button>
      <nav
        className={`nav-links ${mobileMenuVisible ? "show-mobile-menu" : ""}`}
      >
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
    </div>
  );
};

export default Nav;
