import React from "react";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { _id, img, name, price } = props.product;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/${_id}`)}
      className="mx-2 my-2 bg-white xl:px-2 px-1 rounded py-2 hover:shadow-lg hover:cursor-pointer transition-all duration-600"
    >
      <img className="px-5 py-5" src={img} alt={name} />
      <h4 className="text-sm px-3">{name.slice(0, 55)}...</h4>
      <p className="px-3 py-2">
        $<strong>{price}</strong>
      </p>
    </div>
  );
};

export default Product;
