import React from 'react'
import { Link } from "react-router-dom";
import cat1 from "../../pictures/cat1.jpg";
import "./catcard.css";

export const CategoryCard = () => {
  return (
    <div>
        <Link className="catcard" to="/products">
        <img className="catcardimg" src={cat1} alt="name" />
        <h3>category</h3>
      </Link>
    </div>
  )
}
