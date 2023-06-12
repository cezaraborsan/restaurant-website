import React from "react";
import { Link } from "react-router-dom";
import IntersectionObserver from "../IntersectionObserver";

function Footer() {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = IntersectionObserver(handleIntersection, {
    threshold: 0.3,
  });
  return (
    <>
      <footer className="footer intersectionObserver" ref={targetRef}>
        <div className="footer-content">
          <div className="footer-logo-container">
            <p className="footer-logo">MIYABI HOUSE</p>
            <p className="footer-paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, labore? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="footer-sections">
            <div className="footer-section">
              <h4 className="footer-heading">Navigation</h4>
              <nav className="footer-nav">
                <Link to="/" className="footer-link">
                  Home
                </Link>
                <Link to="/menu" className="footer-link">
                  Menu
                </Link>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </nav>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Opening Hours</h4>
              <p className="footer-program-info">
                Monday-Friday: 9:00 AM - 10:00 PM
                <br />
                Saturday: 10:00 AM - 11:00 PM
                <br />
                Sunday: 11:00 AM- 10:00 PM
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Contact</h4>
              <p className="footer-contact-info">
                Phone: +1 (123) 456-7890
                <br />
                Email: info@example.com
                <br />
                Location: 123 Main Street, City, State, ZIP
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
