import React, { useEffect, useState } from "react";

import BestSelling from "../components/home/products/BestSelling";
import FeaturedProducts from "../components/home/products/featuredProducts";
import Footer from "../components/shared/footer/Footer";

import Header from "../components/shared/header/Header";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://still-eyrie-85728.herokuapp.com/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <>
      <ScrollToTop
        smooth
        style={{ paddingLeft: "4px", border: "1px solid cyan", color: "white" }}
      />
      <Header />
      {products?.length === 0 ? (
        <div
          className="flex items-center justify-center"
          style={{ height: "60vh" }}
        >
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
