import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "./links";

const Menu = () => {
  const navItems = links;

  return (
    <div className="md:block hidden pb-2 capitalize">
      <div className="md:w-9/12 w-11/12 mx-auto flex items-center justify-center">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={`/${item.path}`}
            className="px-4 hover:text-orange-500 font-semibold"
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "tomato" : "",
              };
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
