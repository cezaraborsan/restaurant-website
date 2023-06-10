import React from "react";
import Navbar from "../Layout/Navbar.js";
import Footer from "../Layout/Footer";
import MainButton from "../MainButton";
import "../../aboutPage.css";

function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h1 className="contact-title">Contact Us</h1>
        <div className="contact-content">
          <section className="reservation-section">
            <h2 className="contact-subtitle">Reservations</h2>
            <p className="contact-paragraph">
              For any inquiries or to make a reservation, please feel free to
              reach out to us using the contact information below.
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <span>Phone:</span> +1 (123) 456-7890
              </li>
              <li className="contact-item">
                <span>Email:</span> info@example.com
              </li>
              <li className="contact-item">
                <span>Address:</span> 123 Main Street, City, State, ZIP
              </li>
            </ul>
          </section>

          <section className="opening-hours-section">
            <h2 className="contact-subtitle">Opening Hours</h2>
            <p className="contact-paragraph">
              <span>Monday - Friday:</span> 9:00 AM - 10:00 PM <br />
              <span>Saturday - Sunday:</span> 10:00 AM - 11:00 PM
            </p>
          </section>

          <section className="catering-section">
            <h2 className="contact-subtitle"> Catering</h2>
            <p className="contact-paragraph">
              If you are interested in our catering services for events or
              special occasions, please get in touch with us using the contact
              information provided. We will be happy to assist you with your
              catering needs.
            </p>
          </section>
          <MainButton
            label="See Our Menu"
            bgColor="#e56e0c"
            color="#f3ede1"
            hoverBgColor="#f3ede1"
            hoverColor="#e56e0c"
          />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
