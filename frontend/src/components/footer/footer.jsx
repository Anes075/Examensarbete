import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
/* import facebook_icon from "../../assets/facebook_icon.png"; */
/* import x_icon from "../../assets/x_icon.png"; */
/* import instagram_icon from "../../assets/_icon.png"; */

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <p>Examen Store</p>
      </div>

      <ul className="footer-links">
        <Link style={{ textDecoration: "none", color: "#f5f5f5" }} to="/">
          <li>Products</li>
        </Link>

        <Link style={{ textDecoration: "none", color: "#f5f5f5" }} to="/">
          <li>About</li>
        </Link>

        <Link style={{ textDecoration: "none", color: "#f5f5f5" }} to="/">
          <li>Contact</li>
        </Link>
      </ul>

      <div className="footer-social-icons">
        <div className="footer-icons-container">
          {/* <img src="instagram_icon" alt="Instagram" /> */}
          <p>Instagram</p>
        </div>

        <div className="footer-icons-container">
          {/* <img src="facebook_icon" alt="Facebook" /> */}
          <p>Facebook</p>
        </div>

        <div className="footer-icons-container">
          {/* <img src="x_icon" alt="X" /> */}
          <p>X</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
