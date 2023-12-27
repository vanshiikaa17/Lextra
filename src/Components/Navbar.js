import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../pictures/logo_lextra.png";
export const Navbar = () => {
  return (
    <div className="navbarcss">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container-fluid ">
          <div className="navbartop">
            <div>
              <Link to="/" className="navbar-brand">
                <img className="logo" src={logo} alt="Lextra" />
              </Link>
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
            <div>
              {/* <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
          <div
            className="collapse navbar-collapse navitems"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/products" className="nav-link ">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/keypersonnel" className="nav-link ">
                  Key Personnel
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link ">
                  Contact us
                </Link>
              </li>
            </ul>
            {/* <div>
            <Link to="/about" className="nav-link">Login</Link>
                
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};
