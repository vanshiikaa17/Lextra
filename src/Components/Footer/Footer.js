import React from 'react';
import logo from "../../pictures/logo_lextra.png";
import "./footer.css";
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-1">
          <img src={logo} alt="Lextra" />
          <p className="footerp">
            Lextra Pharmaceuticals cater to over 45 therapeutic areas that
            include cardiovascular, gastrointestinal, analgesics, haematinics,
            anti-infectives, antibiotics, respiratory agents, antidiabetics and
            immunologicals.
          </p>
        </div>
        <div className="footer-2">
        <h3>Lextra Pharmaceuticals</h3>
        <p>Ekta Vihaar, Mohali, Punjab, India 140603</p>
        <Link className="viewmore" to="./contact">
          <button type="button" className="btn btn-warning btn-lg btncss vmbtn">
            Contact Us
          </button>
        </Link>
        <p>Copyright © Lextra Pharmaceuticals. All Rights Reserved.</p>
        </div>
        
      </div>
  )
}
