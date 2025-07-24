import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { assets } from "../../assets/assests"; // Ensure assets.footer and assets.logo exist


function FoodkingFooter() {
  return (
    <footer
      className="foodking-footer"
      style={{ backgroundImage: `url(${assets.footerer})` }}
    >
      <div className="footer-top">
        {/* Column 1: Brand / Intro */}
        <div className="footer-col brand-col">
          <img src={assets.ambur} alt="Zahoor Logo" className="footer-logo" />
          <h2 className="footer-brand-name">Ambur Arusuvai Biryani</h2>
          <p className="footer-brand-desc">
            We believe in creating culinary masterpieces that transcend time.
            Our passion for quality and innovation is evident in every dish we
            craft. Discover the legacy behind our flavors.
          </p>
          <a href="mailto:info@example.com" className="footer-email">
            info@example.com
          </a>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col links-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#services">Home</a>
            </li>
            <li>
              <a href="#about-company">Service</a>
            </li>
            <li>
              <a href="#latest-news">Our Menu</a>
            </li>
            <li>
              <a href="#team-member">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Address / Hours / Phone */}
        <div className="footer-col address-col">
          <h3 className="footer-col-title">Address</h3>
          <p className="footer-address">
              85, Tana St, <br />
              Otteri, Purasaiwakkam,  <br />
              Chennai, Tamil Nadu 600007
          </p>
          <p className="footer-phone">9840540457</p>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-col social-col">
          <h3 className="footer-col-title">Social Media</h3>
          <ul className="footer-social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="social-icon" /> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="social-icon" /> Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="social-icon" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p className="footer-copy">© 2025. Ambur Arusuvai Biryani. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FoodkingFooter;