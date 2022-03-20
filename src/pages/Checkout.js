import React from "react";
import CheckoutLayout from "../components/checkout/CheckoutLayout";
import Footer from "../components/shared/footer/Footer";

import Header from "../components/shared/header/Header";

const Checkout = () => {
  return (
    <>
      <Header />
      <CheckoutLayout />
      <Footer />
    </>
  );
};

export default Checkout;
