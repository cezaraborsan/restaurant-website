import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HamburgerMenu from "./HamburgerMenu";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Toggle scrolling behavior
  if (!isMenuOpen) {
    document.body.style.overflowY = "scroll";
  } else {
    document.body.style.overflowY = "hidden";
  }

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 900);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav>
        <div className="navbar-logo">MIYABI HOUSE</div>
        <div className="navbar-links-list">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/menu" className="navbar-link">
            Menu
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </div>
        {/* Render the HamburgerMenu component for mobile screen sizes */}
        {isMobileScreen && (
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          </div>
        )}
      </nav>

      {/* Render the HamburgerMenu component for mobile screen sizes */}
      {isMobileScreen && (
        <>
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <div
            className={` ${isMenuOpen ? "overlay" : ""}`}
            onClick={closeMenu}
          ></div>
        </>
      )}
    </>
  );
}

export default Navbar;
