import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Address.css";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Card 1: Address */}
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3 className="contact-card-title">ADDRESS LINE</h3>
          <p>85, Tana St,</p>
          <p>Otteri, Purasaiwakkam,</p>
          <p>Chennai, Tamil Nadu</p>
        </div>

        {/* Card 2: Phone - highlighted in red (or gold) */}
        <div className="contact-card contact-card-highlight">
          <FaPhone className="contact-icon" />
          <h3 className="contact-card-title">PHONE NUMBER</h3>
          <p>9840540457</p>
        </div>

        {/* Card 3: Mail */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3 className="contact-card-title">MAIL ADDRESS</h3>
          <p>zahoorbriyani@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;