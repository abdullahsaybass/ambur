import React from "react";
import "./Serviceheader.css";
import { assets } from "../assets/assests";

function Welcome() {
  return (
    <section className="service-welcome-section">
      <div className="service-welcome-container">
        {/* Left Column: Title, Subtitle, Paragraphs, Button */}
        <div className="service-welcome-text">
          <h2 className="service-welcome-title"> Ambur Arusuvai Biryani CATERING</h2>
          <div className="service-welcome-subtitle">WHO WE ARE</div>
          <p className="service-welcome-description">
          At Ambur Arusuvai Biryani Catering, we specialize in delivering high-quality catering services with a focus on authentic 
          flavors and excellent service. Our journey started with a commitment to providing delicious, well-prepared meals 
          for all types of events.
          </p>
          <p className="service-welcome-description">
          From intimate family gatherings to large corporate functions, we offer a diverse menu featuring traditional biryani and other flavorful dishes. 
          Our experienced team ensures that every event is well-organized, with great attention to taste, presentation, and customer satisfaction.
          Whether you need catering for a wedding, business event, or celebration, Ambur Arusuvai Biryani Catering is dedicated to making your occasion memorable with 
          freshly prepared, high-quality food.
          </p>
          <button className="service-welcome-btn">LEARN MORE</button>
        </div>

        {/* Right Column: Main Image */}
        <div className="service-welcome-image">
          <img src={assets.muttonbriyani} alt="Zahoor Biryani Catering" />
        </div>
        <img
          src={assets.briys2}
          alt="Catering Setup"
          className="service-shutter-image-1"
        />
        {/* Optionally, include additional images as needed */}
        {/* <img src={assets.briys3} alt="Additional Catering Visual" className="service-shutter-image-2" /> */}
      </div>
    </section>
  );
}

export default Welcome;