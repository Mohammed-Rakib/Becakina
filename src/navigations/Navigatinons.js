import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";

const Navigatinons = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/search" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigatinons;
