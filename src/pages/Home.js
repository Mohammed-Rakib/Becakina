import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BestSelling from "../components/products/BestSelling";
import FeaturedProducts from "../components/products/featuredProducts";

import Header from "../components/shared/header/Header";
import { fetchProducts } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.products.products);
  return (
    <>
      <Header />
      <BestSelling products={products} />
      <FeaturedProducts products={products} />
    </>
  );
};

export default Home;
