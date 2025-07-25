import React, { useState, useEffect } from "react";
import { assets } from "../assets/assests";
import "./Header.css";

const Header = () => {
  const texts = ["mutton", "chicken"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-container">
      <img
        src={assets.bri}
        alt="header"
        className="header-image"
      />
      {/* Optional rotating text */}
      <p className="rotating-text">
        {/* Delicious <span className="span-highlight">{texts[index]}</span> – dine in or order for any function! */}
      </p>
    </div>
  );
};

export default Header;
