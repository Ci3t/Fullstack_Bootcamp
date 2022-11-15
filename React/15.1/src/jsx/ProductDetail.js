import React, { useState } from "react";
import { Link ,useParams} from "react-router-dom";
// import {store} from '../Store'
import { store } from "../store.js";

function ProductDetail() {
    const params = useParams();
    const displayData = () => {
      // Api call containing params.animalType
      // if error redirect to 404 page
      // else ↓
      {store.map((product) => {
        return (
          <>
            <h1>params.title</h1>
            <p>{product.title}</p>
            <p>{product.size}</p>
            <img src={product.imageUrl} />
            <p>{product.price}</p>
          </>
        );
      })}
      <Link to="/ProductsMain">Back</Link>
    };
    return <div>{displayData()}</div>;
  return (
    
    <div>
      {store.map((product) => {
        return (
          <>
            
            <p>{product.title}</p>
            <p>{product.size}</p>
            <img src={product.imageUrl} />
            <p>{product.price}</p>
          </>
        );
      })}
      <Link to="/ProductsMain">Back</Link>
    </div>
  );
}

export default ProductDetail;
