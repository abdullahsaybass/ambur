import React from "react";
import "./FoodComboSection.css";
import { assets } from "../assets/assests";

function FoodComboSection() {
  return (
    <section className="combo-two-column">
      {/* LEFT COLUMN */}
      <div className="combo-left-col">
        <div className="combo-left-bg">
          {/* Optional: Add decorative biryani images here */}
          <img src={assets.briys2} alt="bri-4" className="briy-45"/>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="combo-right-col">
        <div className="combo-content-boxx">
          {/* Tagline */}
          <p className="combo-tagline">CREATING HISTORY</p>

          {/* Main heading */}
          <h2 className="combo-heading">THE ZAHOOR BIRYANI LEGACY</h2>

          {/* Description */}
          <p className="combo-description">
            From humble beginnings to a royal tradition, Zahoor Biryani has delighted taste buds for decades.
          </p>

          {/* History Paragraph */}
          <p className="combo-history">
            Every order writes a new chapter in our legacy. Join us in celebrating our rich history and timeless flavors.
          </p>

          {/* Order button */}
          <button className="combo-order-btn">ORDER NOW</button>
        </div>
      </div>
    </section>
  );
}

export default FoodComboSection;