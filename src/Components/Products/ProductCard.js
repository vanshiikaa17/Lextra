import React from "react";
import { Link } from "react-router-dom";
import prod from "../../pictures/Prod.jpg";
import "./prodcard.css";
export const ProductCard = () => {
  return (
    <div>
      {/* <Link className='productCard' to={`/allproducts/${product._id}`}>
        <img className='cardimg' src={product.images.url} alt={product.name}/>
        <p>{product.name}</p>
        <span className='spann'>{`₹${product.price}`}</span>

        <div className='reviews'>
            <ReactStars {...options}/> <span>({product.numberOfReviews} Reviews)</span>
        </div>
    
    </Link> */}

      <Link className="productCard" to="/products">
        <img className="cardimg" src={prod} alt="name" />
        <p>Name of Med</p>
        <span className="spann">₹ 500</span>

      </Link>
    </div>
  );
};
