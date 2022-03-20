import React from "react";
import SignupForm from "../components/authentication/SignupForm";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";

const Signup = () => {
  return (
    <section className="bg-gray-100 min-h-screen ">
      <Header />
      <div className="md:w-7/12 w-11/12 mx-auto py-10 my-10 bg-white md:flex  justify-center">
        <SignupForm />
      </div>
      <Footer />
    </section>
  );
};

export default Signup;
