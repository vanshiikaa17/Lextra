import React from "react";
import img1 from "../../pictures/brand1.jpg";
import img2 from "../../pictures/brand2.jpg";
import "./brandCarousel.css";
export const BrandCarousel = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-custom"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active carousel-item-custom " data-bs-interval="2000">
            <div className="row">
              <div className="  col-md-3 col-lg-3">
                <img src={img1} className="img-fluid bcimg" alt="..." />
              </div>
              <div className="  col-md-3 col-lg-3">
                <img src={img2} className="img-fluid bcimg" alt="..." />
              </div>
              <div className="  col-md-3 col-lg-3 ">
                <img src={img1} className="img-fluid bcimg" alt="..." />
              </div>
              <div className="  col-md-3 col-lg-3 ">
                <img src={img2} className="img-fluid bcimg" alt="..." />
              </div>
            </div>
          </div>
          <div className="carousel-item carousel-item-custom" data-bs-interval="2000">
            <div className="row">
              <div className=" col-md-3 col-lg-3">
                <img src={img2} className="img-fluid bcimg" alt="..." />
              </div>
              <div className="  col-md-3 col-lg-3">
                <img src={img2} className="img-fluid bcimg" alt="..." />
              </div>
              <div className="  col-md-3 col-lg-3 ">
                <img src={img1} className="img-fluid bcimg" alt="..." />
              </div>
              <div className="  col-md-3 col-lg-3 ">
                <img src={img1} className="img-fluid bcimg" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
