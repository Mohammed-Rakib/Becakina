import React, { useEffect, useState } from "react";

import BestSelling from "../components/home/products/BestSelling";
import FeaturedProducts from "../components/home/products/featuredProducts";
import Footer from "../components/shared/footer/Footer";

import Header from "../components/shared/header/Header";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7070/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <>
      <Header />
      {products?.length === 0 ? (
        <div>
          <h1 className="py-10 text-center text-red-500">Products Loading</h1>
        </div>
      ) : (
        <>
          <BestSelling products={products} />
          <FeaturedProducts products={products} />
        </>
      )}
      <Footer />
    </>
  );
};

export default Home;
