import React from "react";
import { Link } from "react-router-dom";
// import prod from "../../pictures/1.jpg";
import "./prodcard.css";

export const ProductCard = (Props) => {
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
        <img className="cardimg" src={Props.imgurl} alt="name" />
        <p>{Props.name}</p>
        <span className="spann">₹ {Props.cost}</span>

      </Link>
    </div>
  );
};
