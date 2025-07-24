import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { assets } from "../../assets/assests";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* Logo Section */}
          <div className="logo-section">
            <img src={assets.ambur} alt="Foodking Logo" className="logo-img" />
            <h1 className="brand-name"></h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/service">SERVICE</Link></li>
            <li><Link to="/our-menu">OUR MENU</Link></li>
            <li><Link to="/outlet">OUTLET</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>

          {/* Right Side: Contact button & Hamburger */}
          <div className="nav-actions">
            <button className="contact-btn">CONTACT US</button>
            <div className="hamburger" onClick={toggleMenu}>
              <FaBars className="hamburger-icon" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Slide-in) */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <img src={assets.ambur} alt="Logo" className="mobile-logo" />
          <FaTimes className="close-icon" onClick={toggleMenu} />
        </div>
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={toggleMenu}>HOME PAGE</Link></li>
          <li><Link to="/service" onClick={toggleMenu}>SERVICE</Link></li>
          <li><Link to="/our-menu" onClick={toggleMenu}>OUR MENU</Link></li>
          <li><Link to="/outlet" onClick={toggleMenu}>OUTLET</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>CONTACT US</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
