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

  const cart = useSelector((state) => state.products.cart);

  return (
    <div className="py-2 md:bg-white bg-gray-800">
      <div className="md:w-9/12 w-11/12 mx-auto flex justify-between py-2">
        <div>
          <Link to="/">
            <img
              src="https://i.postimg.cc/jjTWCCN4/Beca-kina.png"
              className="md:h-20 h-16 "
              alt="web logo"
            />
          </Link>
        </div>

        {/* profile and cart */}
        <div className="md:flex hidden items-center">
          <Link to="/search" className="px-3 border-r-2 border-gray-400">
            <HiOutlineSearch className="text-2xl hover:text-orange-500 " />
          </Link>
          <Link to="/account" className="px-3 border-r-2 border-gray-400">
            <FiUser className="text-2xl hover:text-orange-500 " />
          </Link>
          <Link to="/cart" className="px-3  relative">
            <AiOutlineShopping className="text-2xl hover:text-orange-500 relative " />
            <span className="absolute bottom-3 right-1 bg-orange-400 w-5 text-center text-sm rounded-full">
              {cart.length}
            </span>
          </Link>
        </div>

        {/* // menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <CgMenu className="text-4xl mt-2 text-white" />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Navigation;
