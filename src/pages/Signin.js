import React from "react";
import SigninForm from "../components/authentication/SigninForm";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";

const Signin = () => {
  return (
    <section className="bg-gray-100 min-h-screen ">
      <Header />
      <div className="md:w-7/12 w-11/12 mx-auto py-10 my-10 bg-white md:flex  justify-center">
        <SigninForm />
      </div>
      <Footer />
    </section>
  );
};

export default Signin;
