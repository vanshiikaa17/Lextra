import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../pictures/logo_lextra.png";
export const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-custom navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbarcss">
          <div className="navbartop">

            <div
              className="collapse navbar-collapse navitems"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-row top-ul">
                <li className="nav-item">
                  <Link to='/products'state={{med: "Multivitamins"}} className="nav-link">
                    Multivitamins
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/products'state={{med: "Analgesics"}} className="nav-link">
                    Analgesics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link ">
                    Antibiotics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/keypersonnel" className="nav-link ">
                    Gastrointestinal
                  </Link>
                </li>



              </ul>
            </div>

          </div>
        </div>
      </nav> */}
      {/* flex-row top-ul */}
      <div class="navbarcss"></div>
      <div className="nav2-custom">


        <nav className="navbar navbar-custom navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid  ">

            <div className="navitems2">
              <div className="navbarLogo">
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


              <div className="collapse navbar-collapse navitems "
                id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      HOME
                    </Link>

                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link">
                      PRODUCTS
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ABOUT US
                    </Link>
                    <ul className="dropdown-menu dropdownCSS" aria-labelledby="navbarDropdown">
                      <li><Link className="dropdown-item" to="/about">About Lextra</Link></li>
                      <li><Link className="dropdown-item" to="/qstandards">Quality Standards</Link></li>
                      {/* <li><Link className="dropdown-item" to="/people">People</Link></li> */}
                    </ul>
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
      </div>
    </>
  );
};
