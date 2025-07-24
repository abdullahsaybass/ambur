import React from "react";
import "./Welcome.css";
import { assets } from "../assets/assests";

// Example image import (replace with your actual path)
// import zahoorBiryaniPhoto from "../assets/zahoor-biryani-photo.jpg";

function Welcome() {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        {/* Left Column: Title, Subheading, Paragraph, Button */}
        <div className="welcome-text">
          <h2 className="welcome-title">Ambur Arusuvai Briyani</h2>
          <div className="welcome-subtitle">WHO WE ARE</div>
          <p className="welcome-descriptiond">
            Ambur Arusuvai Briyani started as a humble food stall in the early 1900s.
            With a passion for authentic flavors and traditional cooking
            techniques, we have grown into one of the most beloved biryani
            brands in the region.
          </p>
          <p className="welcome-descriptiond">
            Our commitment to quality ingredients, meticulous preparation, and
            time-honored recipes sets Zahoor Biryani apart. We continue to
            expand, sharing our legendary taste with food lovers everywhere.
          </p>
          <button className="welcome-btn">READ MORE</button>
        </div>

        {/* Right Column: Image */}
        <div className="welcome-image">
          <img src={assets.muttonbriyani} alt="Zahoor Biryani" />
        </div>
        {/* <img src={assets.briys2} alt="Zahoo-Biryani" className="shutter-image-1" /> */}
        {/* <img src={assets.briys3} alt="Zahoo-Biryani" className="shutter-image-2" /> */}
      </div>
    </section>
  );
}

export default Welcome;
