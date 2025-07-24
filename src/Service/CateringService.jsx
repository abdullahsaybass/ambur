import React from "react";
import "./CateringService.css";
import { assets } from "../assets/assests";
// Replace these with your actual image imports
// import cookingCareImg from "../assets/cooking-care.png";
// import quickDeliveryImg from "../assets/quick-delivery.png";
// import chooseFoodImg from "../assets/choose-food.png";

const CateringService = () => {
  return (
    <section className="catering-service-section">
      {/* Header */}
      <div className="catering-service-header">
        <p className="catering-service-subtitle">FOOD PROCESSING</p>
        <h2 className="catering-service-title">HOW WE SERVE YOU?</h2>
      </div>

      {/* Three Cards */}
      <div className="catering-service-cards">
        {/* Card 1 */}
        <div className="catering-card">
          <img
            src={assets.briys1}
            alt="Cooking With Care"
            className="catering-card-img"
          />
          <h3 className="catering-card-title">COOKING WITH CARE</h3>
          <p className="catering-card-desc">
            It's the perfect dining experience where <br />
            experience is quick and efficient.
          </p>
        </div>

        {/* Card 2 (highlighted center) */}
        <div className="catering-card catering-card-highlight">
          <img
            src={assets.briys2}
            alt="Quick Delivery"
            className="catering-card-img"
          />
          <h3 className="catering-card-title">QUICK DELIVERY</h3>
          <p className="catering-card-desc">
            It's the perfect dining experience where <br />
            experience is quick and efficient.
          </p>
        </div>

        {/* Card 3 */}
        <div className="catering-card">
          <img
            src={assets.briys3}
            alt="Choose Food"
            className="catering-card-img"
          />
          <h3 className="catering-card-title">CHOOSE FOOD</h3>
          <p className="catering-card-desc">
            It's the perfect dining experience where <br />
            experience is quick and efficient.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CateringService;
