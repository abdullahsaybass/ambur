import React from "react";
import "./Promotion.css";

function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-section-content">
        <div className="promo-text-container">
          <h1 className="promo-title">
            Order Your <span className="promo-highlight">Ambur Arusuvai Biryani</span> For Functions
          </h1>
          <p className="promo-subtitle">
            We cater for weddings, corporate events, birthdays and more.
          </p>
          <p className="promo-description">
            With decades of expertise and authentic recipes, Zahoor Biryani delivers a culinary experience that makes your event unforgettable. Our passion for quality ensures every dish is crafted to perfection.
          </p>
          <button className="promo-cta-btn">BOOK NOW</button>
        </div>
      </div>
    </section>
  );
}

export default PromoSection;
