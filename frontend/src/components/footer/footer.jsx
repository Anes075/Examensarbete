import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>Examen Store</p>
      </div>

      <ul className="footer-links">
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src="#" alt="Instagram" />
        </div>

        <div className="footer-icons-container">
          <img src="#" alt="Facebook" />
        </div>

        <div className="footer-icons-container">
          <img src="#" alt="X" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
