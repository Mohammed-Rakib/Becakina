import React from "react";
import Menu from "./Menu";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div>
      <TopHeader />
      <Navigation />
      <Menu />
    </div>
  );
};

export default Header;
