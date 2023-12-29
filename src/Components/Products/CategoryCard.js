import React from 'react'
import { Link } from "react-router-dom";
import category from "../../pictures/category.png";
import "./catcard.css";

export const CategoryCard = () => {
  return (
    <div>
        <Link className="catcard" to="/products">
        <img className="catcardimg" src={category} alt="name" />
        <h3>category</h3>
      </Link>
    </div>
  )
}
