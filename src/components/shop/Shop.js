import React from "react";
import "./Shops.css";

const Shop = (props) => {
  const { image, name } = props.shop;
  return (
    <div className="">
      <div className="card shop__card">
        <div className="image__div ">
          <img src={image} className=" shop__image" alt="" />
        </div>
        <div className="title_shop">
          <p className="shop__title">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
