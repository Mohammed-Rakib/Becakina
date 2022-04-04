import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";
import { CgMenu } from "react-icons/cg";
import MobileMenu from "./MobileMenu";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cart = useSelector((state) => state.cart.cart);

  const user = useSelector((state) => state.user.user);

  return (
    <div className="md:pt-4 pt-2 md:pb-0 pb-3">
      <div className="md:w-9/12 w-11/12 mx-auto flex justify-between items-center pt-2">
        <div>
          <Link to="/">
            <h1 className="xl:text-5xl logo text-green-400 font-extrabold tracking-widest md:text-4xl  text-3xl  first-letter:text-pink-500">
              Becakina
            </h1>
          </Link>
        </div>

        {/* profile and cart */}
        <div className="md:flex hidden items-center relative font-semibold">
          <Link to="/search" className="px-3 border-r-2 border-gray-400 flex">
            <HiOutlineSearch className="text-2xl hover:text-orange-500 " />
            Search
          </Link>
          {user ? (
            <Link
              to="/dashboard/default"
              className="px-3 border-r-2 border-gray-400 flex"
            >
              <FiUser className="text-2xl hover:text-orange-500 " /> Profile
            </Link>
          ) : (
            <Link
              to="/signin"
              className="px-3 border-r-2 border-gray-400 flex items-center"
            >
              <FiUser className="text-2xl hover:text-orange-500 " />
              Account
            </Link>
          )}
          <Link to="/cart" className="px-3 relative  flex">
            <AiOutlineShopping className="text-2xl hover:text-orange-500 relative " />
            <span className=" shadow-md w-auto absolute z-10 px-2 rounded-full bg-red-500 text-white bottom-4 right-10">
              {cart?.length}
            </span>
            Cart
          </Link>
        </div>

        {/* // menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <CgMenu className="text-4xl mt-2 " />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navigation;
