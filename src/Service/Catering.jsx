import React from "react";
import "./Catering.css";
import { assets } from "../assets/assests";

const services = [
  {
    title: "WEDDING CATERING",
    description:
      "Enjoy the rich taste of authentic biryani, perfectly blended with traditional spices, for your special occasions. From delicious appetizers to exquisite desserts, we offer a complete catering experience tailored to your preferences. Our experienced chefs and dedicated team ensure a hassle-free service, allowing you to focus on celebrating with your guests.",
    image: assets.wedding
  },
  {
    title: "BIRTHDAY PARTY CATERING",
    description:
      "Make your birthday celebration extra special with our flavorful biryani and a variety of delicious dishes. We offer a carefully curated menu that includes starters, main courses, and desserts, ensuring a delightful dining experience for you and your guests. Our team takes care of everything, from setup to cleanup, so you can enjoy your special day worry-free.",
    image: assets.birthday,
  },
  {
    title: "HOUSEWARMING CATERING",
    description:
      "Welcome your friends and family to your new home with a delicious spread of authentic dishes. Our housewarming catering service offers a mix of traditional and contemporary flavors, making your gathering warm and memorable. We handle everything from food preparation to serving, so you can focus on celebrating this milestone.",
    image: assets.housewarming,
  },
  {
    title: "CORPORATE CATERING",
    description:
      "Enhance your business events with our professional catering service. We provide a well-planned menu featuring signature biryanis and a variety of other dishes, ensuring a satisfying dining experience for your guests. Whether it’s a corporate lunch, team gathering, or formal event, our prompt service and high-quality food will leave a lasting impression.",
    image: assets.corporate,
  },
  {
    title: "FESTIVAL CATERING",
    description:
      "Celebrate special festivals with a grand feast featuring traditional biryanis and festive delicacies. Whether it’s Diwali, Eid, or any cultural celebration, our catering service brings authentic flavors to your festive gatherings. We work with you to create a customized menu that complements the spirit of the occasion..",
    image: assets.festivel,
  },
  {
    title: "ENGAGEMENT CATERING",
    description:
      "Mark your special day with a delicious menu tailored to your preferences. Our engagement catering service includes a variety of dishes prepared with high-quality ingredients, ensuring an unforgettable dining experience for you and your guests. From planning to execution, we provide seamless service to make your event stress-free.",
    image: assets.engagement,
  },
  {
    title: "CUSTOM EVENT CATERING",
    description:
      "Mark your special day with a delicious menu tailored to your preferences. Our engagement catering service includes a variety of dishes prepared with high-quality ingredients, ensuring an unforgettable dining experience for you and your guests. From planning to execution, we provide seamless service to make your event stress-free.",
    image: assets.custom,
  },
];

function ZahoorCatering() {
  return (
    <section className="zahoor-catering-section">
      <div className="catering-types">
        <h1 className="welcome-text">Welcome to Ambur Arusuvai Biryani Catering</h1>
        <div className="zahoor-catering-container">
          {services.map((service, index) => (
            <div key={index} className="zahoor-catering-box">
              <img src={service.image} alt={service.title} className="catering-image" />
              <h2 className="catering-title">{service.title}</h2>
              <p className="catering-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ZahoorCatering;