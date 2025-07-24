import React from 'react';
import Slider from 'react-slick';
import './Fooditem.css';
import { assets } from '../assets/assests';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const items = [
  { name: 'CHICKEN BRIYANI', img: assets.chickenbriyani },
  { name: 'BUTTER KULCHA', img: assets.chickenmasala },
  { name: 'CARROT HALWA', img: assets.chickenrice },
  { name: 'CHICKEN BUTTER MASALA', img: assets.chickenkebab },
  { name: 'CHICKEN KABAB [ WITH BONE ]', img: assets.muttonbriyani },
];

function SpecialMenu() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3, // Desktop
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992, // Tablet
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="special-container">
      <h2 className="special-title">OUR SPECIAL</h2>
      <p className="special-subtitle">
        OUR FLAVOUR SOME BRIYANI WILL EXCITE YOUR PALATE A 130YEAR OLD TRADITIONAL RECIPE
      </p>

      <div className="slick-carousel-wrapper">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <div className="slick-slide-item" key={idx}>
              <img src={item.img} alt={item.name} />
              <p className="item-title">{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SpecialMenu;
