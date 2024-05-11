import React from "react";
import { ProductCard } from "./ProductCard";
import "./product.css";
import { useState, useEffect } from "react";
// import "";
import data from '../../data.js';
// import { useLocation } from "react-router-dom";


const Categories = [
  "Analgesics",
  "Antiallergics",
  "Antibiotics (Injectables)",
  "Antibiotics (Oral)",
  "Antimalarial",
  "Antipyretics",
  "Cough suppressants",
  "Gynaec range",
  "Gastrointestinals",
  "Multivitamins",
];
let Prods = data;
// console.log(Prods[0]);

export const Products = () => {
  // const location=useLocation();
  // let m="";
  // if(location.state!==null){
  //   const { med } = location.state;
  //   m=med;
  //   console.log("m is "+m);
  // }
  // const [c, setC] = useState(m);
  const [category, setCategory] = useState("Analgesics");
  
  const [Product, setProduct] = useState(Prods);

  useEffect(() => {
    console.log(category);
    // setC(m);
    let p = Prods.filter((p) => p.medCategory === category);
    setProduct(p);
  }, [category]);

  // Prods = Product;
  return (
    <div className="products">
      <div className="categoriesPlants">
        <ul className="categoryList">
          <h4 className="catHead">Browse Categories</h4>

          {Categories.map((category) => (
            <li
              className="categoryListItems"
              onClick={() => {
                setCategory(category);
                // m=category;

              }}
              key={category}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="productDiv">
        {category && (
          <h3 className="selectedCategory">{category}</h3>
        )}
        <div className="productList">

          {Product && Product.map((element) => (

            <ProductCard name={element.name} cost={element.cost} imgurl={element.img} key={element.name} />
          ))}
        </div>
      </div>

    </div>
  );
};
