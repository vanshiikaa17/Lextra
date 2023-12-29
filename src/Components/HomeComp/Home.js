import React from "react";
import { Carousel } from "./Carousel";
import { ProductCard } from "../Products/ProductCard";
import "./home.css";
import { Link } from "react-router-dom";
import { CategoryCard } from "../Products/CategoryCard";
import { MdNavigateNext } from "react-icons/md";
import { BrandCarousel } from "./BrandCarousel";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="topproducts">
        <div className="topprodhead">
          <h1>Top sellers</h1>

          <div className="topprodlist">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <Link className="viewmore" to="./products">
          <button type="button" className="btn btn-dark btn-lg btncss">
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
          <button type="button" className="btn btn-warning btn-lg btncss">
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
            View More <MdNavigateNext />
          </button>
        </Link>
      </div>

      <div className="elitebrands">
        <div>
          <h1>Our Elite Brands</h1>
        </div>
        <div>
          <BrandCarousel />
        </div>
      </div>
    </div>
  );
};
