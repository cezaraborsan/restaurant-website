import React from "react";
import { Link } from "react-router-dom";

function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`hamburger-menu ${isOpen ? "open" : ""}`}>
      <Link to="/" className="menu-link" onClick={toggleMenu}>
        Home
      </Link>
      <Link to="/menu" className="menu-link" onClick={toggleMenu}>
        Menu
      </Link>
      <Link to="/about" className="menu-link" onClick={toggleMenu}>
        About
      </Link>
      <Link to="/contact" className="menu-link" onClick={toggleMenu}>
        Contact
      </Link>
    </div>
  );
}

export default HamburgerMenu;
