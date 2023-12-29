import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../pictures/logo_lextra.png";
export const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-custom navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container-fluid navbarcss">
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
          <div className="navbartop">
            <div className="searchcss">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 inputcss"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-primary inputcss"
                  type="submit"
                >
                  Search
                </button>
              </form>
             
            </div>
            <div
              className="collapse navbar-collapse navitems"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Category1
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/products" className="nav-link ">
                    Category2
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/keypersonnel" className="nav-link ">
                    Category3
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    Category4
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/products" className="nav-link ">
                    All products
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
          {/* <div className="navcontact">
             <Link to="/contact" className="nav-link">
                Contact us
              </Link>
              <Link to="/about" className="nav-link">
                Who are we?
              </Link>
             </div> */}
        </div>
      </nav>
    </div>
  );
};
