import React from "react";
import "./carousel.css";
import img1 from "../../pictures/Frame1.png";
import img2 from "../../pictures/Frame2.png";
import img3 from "../../pictures/Frame3.png";
export const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner carousel-inner-custom">
          <div className="carousel-item active" data-bs-interval="2000">
            {/* <img src={img1} className="d-block w-100 carcss" alt="..." /> */}
            <div>Sample Image</div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            {/* <img src={img2} className="d-block w-100 carcss" alt="..." /> */}
            <div>Lextra Sample Image</div>

          </div>
          <div className="carousel-item" data-bs-interval="2000">
            {/* <img src={img3} className="d-block w-100 carcss" alt="..." /> */}
            <div>Sample Images Lextraa</div>

          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
