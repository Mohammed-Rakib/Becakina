import React from "react";
import Layout from "../../productsPage/Layout";

const featuredProducts = () => {
  return (
    <div className="bg-blue-50">
      <h1 className="text-3xl py-5 md:w-9/12 w-11/12 mx-auto text-center font-medium">
        Feature Products.
      </h1>
      <Layout />
    </div>
  );
};

export default featuredProducts;
