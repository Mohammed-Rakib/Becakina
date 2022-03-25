import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/dashboard/dashboardLayot/Layout";
import Orders from "../components/dashboard/user/Orders";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Shops from "../pages/Shops";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ProtectedRoutes from "../utils/ProtectedRoutes";

const Navigatinons = () => {
  return (
    <Routes>
      {/* // protected routes */}

      <Route element={<ProtectedRoutes />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<>Hello</>} />
          <Route path="editProfile" element={<h1>Yarn</h1>} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      {/* protected routes endpoints */}
      <Route path="/products" element={<Products />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/search" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/contact" element={<Contact />} />
      <Route index path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigatinons;
