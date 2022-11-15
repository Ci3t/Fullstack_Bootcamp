import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {store} from '../Store'
import { store } from "../store.js";

function Products() {


  return (
    <div>
       <Link to='/'>Home</Link>
      <Link to='/ProductsMain'>Product</Link>
       
      <div>
        {/* <button
          onClick={() => {
            setOnScreen((prev) => !prev);
          }}
        >
          Products
        </button>
        <h1>Products</h1> */}
        <>
          {(
            <div>
              {store.map((product) => {
                return <Link to='/ProductsMain'>{product.title}</Link>;
                
              })}
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
                <Link to='/ProductsMain'>Back</Link>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
}
export default Products;
