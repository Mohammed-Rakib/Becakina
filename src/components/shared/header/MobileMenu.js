import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { HiOutlineSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { links } from "./links";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const navItems = links;

  const cart = useSelector((state) => state.products.cart);
  return (
    <div
      className={
        isOpen
          ? "md:hidden absolute top-0 bottom-0 w-56 px-4 right-0 bg-gray-800"
          : "hidden "
      }
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white mt-5 text-3xl transform hover:rotate-90 transition-rotate duration-300"
      >
        X
      </button>

      <div>
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={`/${item.path}`}
            className="px-4 hover:text-orange-400 block py-3 text-white"
            style={({ isActive }) => {
              return {
                display: "block",
                color: isActive ? "orange" : "",
              };
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      <div className="flex space-x-4 text-white mt-9">
        <Link to="/search" className="px-3 border-r-2 border-gray-400">
          <HiOutlineSearch className="text-2xl hover:text-orange-400 " />
        </Link>
        <Link to="/account" className="px-3 border-r-2 border-gray-400">
          <FiUser className="text-2xl hover:text-orange-400 " />
        </Link>
        <Link to="/cart" className="px-3  relative">
          <AiOutlineShopping className="text-2xl hover:text-orange-400 relative " />
          <span className="absolute bottom-3 right-1 bg-orange-400 px-1 text-sm rounded-full">
            {cart.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
