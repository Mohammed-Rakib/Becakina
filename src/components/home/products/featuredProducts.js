import React from "react";

import { Link } from "react-router-dom";

import Product from "../../product/product";

const FeaturedProducts = (props) => {
  return (
    <section className="bg-blue-50 ">
      <div className="md:w-9/12 w-11/12 mx-auto py-5 pb-10">
        <h1 className="text-3xl py-5 font-thin text-center italic ">
          Featured Products.
        </h1>

        <div className=" py-2 grid xl:grid-cols-5 lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-1">
          {props.products?.slice(0, 15).map((product, i) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link className="underline hover:text-green-500 py-3" to="/products">
            All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
