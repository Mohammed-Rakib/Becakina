import React from "react";
import Product from "../product/product";

const BestSelling = (props) => {
  return (
    <section className="bg-blue-50">
      <div className="md:w-9/12 w-11/12 mx-auto py-5">
        <h1 className="text-3xl  px-2 font-medium font-serif">Top Selling</h1>
        <div className=" py-2 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
          {props.products?.slice(40, 43).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
