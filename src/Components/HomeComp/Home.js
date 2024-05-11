import React from "react";
import { Carousel } from "./Carousel";
// import { ProductCard } from "../Products/ProductCard";
import "./home.css";
import { Link } from "react-router-dom";
// import { CategoryCard } from "../Products/CategoryCard";
import { MdNavigateNext } from "react-icons/md";
import { BrandCarousel } from "./BrandCarousel";
import { Vision } from "./Vision";
import brands from "../../pictures/brands01.png";
import brands02 from "../../pictures/brands02.png";
import data from '../../data.js';
let top=[];
let i=0;
while(i<4){
  top.push(data[i]);
  i++;
}
// let Product = require('../../data');

export const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="topproducts">
          <h1>Products</h1>
        <p className="homepara"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde fuga nisi vero dicta maiores rerum ad autem perferendis inventore, ratione quam doloribus veritatis. Quod quas unde nesciunt, culpa iste sint corrupti? Saepe dolores in reiciendis repellendus quis deleniti distinctio animi, veniam labore temporibus est fuga eaque sint suscipit ducimus magni nesciunt tempora amet. Velit animi natus autem. Laborum consequuntur illum obcaecati minus odit in? Quam odio velit eveniet sapiente, corporis architecto vel molestias ipsa! Numquam tempora dolore ipsum! Assumenda ex unde dolore aliquid soluta omnis?

        </p>
        <Link className="viewmore" to="./products">
          <button type="button" className="btn btn-dark btn-lg btncss ">
            View All <MdNavigateNext />
          </button>
        </Link>
      </div>
      <div className="aboutus">
        <h1>Lextra Pharmaceuticals</h1>
        <p className="homepara">
          Lextra Pharmaceuticals is professionally managed, fast growing
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

      {/* <div className="categories">
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
      </div> */}

      <div className="elitebrands">
        
          <h1>Our Elite Brands</h1>
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione repudiandae quod atque ab vero laborum necessitatibus impedit accusamus architecto deleniti ea, a enim blanditiis et ipsa cumque optio, aliquid fugit quos voluptate voluptatum perferendis? Esse voluptatibus pariatur enim ipsum quo. Natus expedita et nostrum est.
          </p> */}
        
          {/* <BrandCarousel /> */}
          <div class="brands">
          <img src={brands} alt="Brands"/>
          <img src={brands02} alt="Brands"/>

          </div>
        
      </div>
      <Vision/>
    </div>
  );
};
