import React from "react";
import Product from "../../product/product";

const BestSelling = (props) => {
  const products = props.products;

  return (
    <section className="bg-blue-50">
      <div className="md:w-9/12 w-11/12 mx-auto py-7">
        <h1 className="text-3xl py-5   ">Top Selling.</h1>

        <div className=" py-2 grid  md:grid-cols-3 gap-2  sm:grid-cols-2 grid-cols-1">
          {products?.slice(12, 15).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
