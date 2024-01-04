import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../pictures/logo_lextra.png";
export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-custom navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbarcss">
          <div className="navbartop">

            <div
              className="collapse navbar-collapse navitems"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    PRODUCTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link ">
                    ABOUT US
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link ">
                    CONTACT US
                  </Link>
                </li>


              </ul>
            </div>
            
          </div>
          </div>
          </nav>
    <div className="nav2-custom">

   
      <nav className="navbar navbar-custom navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid navbarcss ">
          
          <div className="navitems2">
            <Link to="/" className="navbar-brand">
              <img className="logo" src={logo} alt="Lextra" />
            </Link>
            
            <div
              className=".navbar-expand "
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                  Antibiotics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    Analgesics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link ">
                    Cardiovascular
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/keypersonnel" className="nav-link ">
                  Gastrointestinal
                  </Link>
                </li>


              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      </div>
      </>
  );
};
