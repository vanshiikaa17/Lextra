import React from "react";
import { Carousel } from "./Carousel";
import { ProductCard } from "../Products/ProductCard";
import "./home.css";
import { Link } from "react-router-dom";
import { CategoryCard } from "../Products/CategoryCard";
import { MdNavigateNext } from "react-icons/md";
import { BrandCarousel } from "./BrandCarousel";
import logo from "../../pictures/logo_lextra.png";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="topproducts">
        <div className="topprodhead">
          <h1>Top Products</h1>

          <div className="topprodlist">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <Link className="viewmore" to="./products">
          <button type="button" className="btn btn-dark btn-lg btncss ">
            View More <MdNavigateNext />
          </button>
        </Link>
      </div>
      <div className="aboutus">
        <h1>Lextra Pharmaceuticals</h1>
        <p>
          Lextra Pharmaceuticals is professionally managed &amp; fast growing
          Indian pharmaceutical company focused in manufacturing and marketing
          of a wide range of healthcare products. The company's operations
          ranges from API to formulations, generics and healthcare products.
          Lextra has adopted newer technologies including novel drug delivery
          system to enhance dose adherence and patient compliance.
        </p>
        <Link className="viewmore" to="./about">
          <button type="button" className="btn btn-warning btn-lg btncss vmbtn">
            Read More <MdNavigateNext />
          </button>
        </Link>
      </div>

      <div className="categories">
        <div className="topprodhead">
          <h1>Categories</h1>

          <div className="topprodlist">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>
        <Link className="viewmore" to="./products">
          <button type="button" className="btn btn-dark btn-lg btncss">
            View All Categories <MdNavigateNext />
          </button>
        </Link>
      </div>

      <div className="elitebrands">
        
          <h1>Our Elite Brands</h1>
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repudiandae quod atque ab vero laborum necessitatibus impedit accusamus architecto deleniti ea, a enim blanditiis et ipsa cumque optio, aliquid fugit quos voluptate voluptatum perferendis? Esse voluptatibus pariatur enim ipsum quo. Natus expedita et nostrum est.
          </p> */}
        
          <BrandCarousel />
        
      </div>
      <div className="footer">
        <div className="footer-1">
          <img className="logo" src={logo} alt="Lextra" />
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
    </div>
  );
};
