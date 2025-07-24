import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Menu.css";
import { assets } from "../assets/assests";

function FoodMenu() {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeCategory, setActiveCategory] = useState("biryani");

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  // Categories
  const categories = [
    { label: "Biryani", value: "biryani" },
    { label: "Tandoori", value: "tandoori" },
    { label: "Barbeque", value: "barbeque" },
    { label: "Tikka", value: "tikka" },
    { label: "Shawarma", value: "shawarma" },
    { label: "Chicken", value: "chicken" },
    { label: "Fried Rice", value: "friedrice" },
    { label: "Noodles", value: "noodles" },
  ];

  // Menu items with unique images for each price option
  const menuItems = [
    {
      id: 1,
      title: "Grill Chicken",
      category: "chicken",
      prices: [
        { title: "Grill Chicken Full",label: "Full: Rs. 450", img: assets.GRILLCHICKENFULL },
        { title: "Grill Chicken Half",label: "Half: Rs. 225", img: assets.GRILLCHICKENHALF },
      ],
    },
    {
      id: 2,
      title: "Tandoori Chicken",
      category: "tandoori",
      prices: [
        { title:"Tandoori Chicken Full",label: "Full: Rs. 450", img: assets.TANDOORICHICKENFULL },
        { title:"Tandoori Chicken Half",label: "Half: Rs. 225", img: assets.TANDOORICHICKENHALF },
      ],
    },
    {
      id: 3,
      title: "Barbeque",
      category: "barbeque",
      prices: [
        { title:"Barbeque Full",label: "Full: Rs. 490", img: assets.BBQFULL },
        { title:"Barbeque Hlaf",label: "Half: Rs. 245", img: assets.BBQHALF },
      ],
    },
    {
      id: 4,
      title: "Chicken Tikka",
      category: "tikka",
      prices: [
        {  title:"Chicken Tikka Full",label: "Full: Rs. 290", img: assets.CHICKENTIKKAFULL },
        {  title:"Chicken Tikka Half",label: "Half: Rs. 165", img: assets.CHICKENTIKKAHALF },
        {  title:"Hariyali Tikka Full",label: "Full: Rs. 325", img: assets.HARIYALITIKKAFULL },
        {  title:"Hariyali Tikka Half",label: "Half: Rs. 185", img: assets.HARIYALITIKKAHALF },
        {  title:"Reshmi Tikka Full",label: "Full: Rs. 325", img: assets.RESHMITIKKAFULL },
        {  title:"Reshmi Tikka Half",label: "Half: Rs. 185", img: assets.RESHMITIKKAHALF },
      ],
    },
    {
      id: 5,
      title: "Shawarma",
      category: "shawarma",
      prices: [
        {  title:"spl.shawarma",label: "Regular: Rs. 135", img: assets.SHAWARMA },
        {  title:"Bun shawarma",label: "Special: Rs. 115", img: assets.SPECIALSHWARMA },
        {  title:"shawarma",label: "Special: Rs. 95", img: assets.BUNSHAW },
      ],
    },
    {
      id: 6,
      title: "Chicken 65",
      category: "chicken",
      prices: [
        { title:"Chicken 65 100G",label: "100 gm: Rs. 95", img: assets.CHICKEN65100 },
        { title:"Chicken 65 250G",label: "250 gm: Rs. 170", img: assets.CHICKEN65250 },
      ],
    },
    {
      id: 7,
      title: "Mutton Biryani",
      category: "biryani",
      prices: [
        { title: "Mutton Biryani Full",label: "Full: Rs. 430", img: assets.MUTTONBIRIYANIFULL },
        { title: "Mutton Biryani Half",label: "Half: Rs. 260", img: assets.MUTTONBIRIYANIHALF },
      ],
    },
    {
      id: 8,
      title: "Chicken Biryani",
      category: "biryani",
      prices: [
        { title: "Chicken Biryani Full",label: "Full: Rs. 280", img: assets.CHICKENBIRIYANIFULL },
        { title: "Chicken Biryani Half",label: "Half: Rs. 155", img: assets.CHICKENBIRIYANIHALF },
      ],
    },
    {
      id: 9,
      title: "Fried Rice",
      category: "friedrice",
      prices: [
        { title: "Chicken Fried Rice",label: "Chicken: Rs. 155", img: assets.CHICKENFRIEDRICEFULL },
        { title: "Veg Fried Rice",label: "Veg: Rs. 115", img: assets.VEGFRIEDRICE },
        { title: "Egg Fried Rice",label: "Egg: Rs. 130", img: assets.EGGFRIEDRICE },
        { title: "ChickenShezwan Fried Rice",label: "Egg: Rs. 175", img: assets.CHICKENSCHEZWANFRIEDRICE },
      ],
    },
    {
      id: 10,
      title: "Noodles",
      category: "noodles",
      prices: [
        { title: "Chicken Fried Noodles",label: "Chicken: Rs. 160", img: assets.CHICKENSCHEZWANNOODELS },
        { title: "Veg Fried Noodles",label: "Veg: Rs. 115", img: assets.VEGNOODELS },
        { title: "Egg Fried Noodlese",label: "Egg: Rs. 135", img: assets.EGGNOODELS },
        { title: "ChickenShezwan Fried Noodles",label: "Egg: Rs. 180", img: assets.CHICKENNOODELS },
      ],
    },
    {
      id: 11,
      title: "Kuska",
      category: "chicken",
      prices: [
        { title: "Kuska Full", label: "Full: Rs. 185", img: assets.KUSHKAFULL },
        { title: "Kuska Half", label: "Full: Rs. 115", img: assets.KUSHKAHALF },
      ],
    },

    {
      id: 11,
      title: "Chillchickengravy",
      category: "chicken",
      prices: [
        { title: "Chillchicken Dry",label: "Full: Rs. 185", img: assets.CHILLICHICKENGRAVY },
        { title: "Chillchicken Gravy",label: "Half: Rs. 199", img: assets.CHILLICHICKENGRAVY },
      ],
    },
    {
      id: 12,
      title: "Chicken Manchurian",
      category: "chicken",
      prices: [
        { title: "Chicken Manchurian",label: "Full: Rs. 185", img: assets.CHICKENMANCHURIAN },
      ],
    },
  ];

  // Filter items based on active category
  const filteredMenuItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  // Flatten each item's prices for separate cards in the slider
  const flatSliderItems = [];
  filteredMenuItems.forEach((item) => {
    item.prices.forEach((priceOption, index) => {
      flatSliderItems.push({
        id: `${item.id}-${index}`,
        title: priceOption.title,
        price: priceOption.label,
        img: priceOption.img,
      });
    });
  });

  // Header
  const header = (
    <div className="biryani-header">
      <div>
        <h3 className="biryani-slogan">SAVOR THE AUTHENTIC TASTE</h3>
        <h2 className="biryani-title">FEATURED MENU</h2>
      </div>
    </div>
  );

  return (
    <div className="biryani-section">
      <div className="biryani-wrapper">
        {header}
        {/* Category Buttons */}
        <div className="category-buttons" style={{ marginBottom: "30px" }}>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={
                activeCategory === cat.value ? "active-category" : "inactive-category"
              }
              style={{
                marginRight: "10px",
                padding: "8px 16px",
                cursor: "pointer",
                border: "none",
                borderRadius: "4px",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

       

        {/* If mobile, show in slider. If desktop, show in grid */}
        {isMobile ? (
          <Slider ref={sliderRef} {...settings}>
            {flatSliderItems.map((item) => (
              <div key={item.id} className="biryani-slide">
                <div className="biryani-card">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="biryani-main-img"
                  />
                  <div className="biryani-border"></div>
                  <h3 className="biryani-card-title">{item.title}</h3>
                  <p className="biryani-card-price">{item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="biryani-grid">
            {flatSliderItems.map((item) => (
              <div key={item.id} className="biryani-card grid-card">
                <img
                  src={item.img}
                  alt={item.title}
                  className="biryani-main-img"
                />
                <div className="biryani-border"></div>
                <h3 className="biryani-card-title">{item.title}</h3>
                <p className="biryani-card-price">{item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FoodMenu;