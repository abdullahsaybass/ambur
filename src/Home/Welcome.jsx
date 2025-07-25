import React from "react";
import "./Welcome.css";
import { assets } from "../assets/assests";

function Welcome(){
  return (
    <section className="intro-section">
      <div className="intro-container">
        {/* Left Column: Image */}
        <div className="intro-image">
          <img src={assets.muttonbriyani} alt="Zahoor Biryani" />
        </div>

        {/* Right Column: Text */}
        <div className="intro-text">
          <h2 className="intro-title">Ambur Arusuvai Briyani</h2>
          <div className="intro-subtitle">WHO WE ARE</div>
          <p className="intro-description">
            Ambur Arusuvai Briyani started as a humble food stall in the early 1900s.
            With a passion for authentic flavors and traditional cooking techniques,
            we have grown into one of the most beloved biryani brands in the region.
          </p>
          <p className="intro-description">
            Our commitment to quality ingredients, meticulous preparation, and
            time-honored recipes sets Zahoor Biryani apart. We continue to
            expand, sharing our legendary taste with food lovers everywhere.
          </p>
          <button className="intro-btn">READ MORE</button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
