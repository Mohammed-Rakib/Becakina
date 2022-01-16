import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/productSlice";
import cogoToast from "cogo-toast";

const CartProduct = (props) => {
  const { _id, img, name, price, quantity } = props.product;

  const dispatch = useDispatch();

  // removeFromCart
  const deleteFromCart = (id) => {
    dispatch(removeFromCart(id));
    const options = { position: "bottom-right" };
    cogoToast.success("remove from the cart!", options);
  };

  return (
    <div className="sm:flex shadow-md my-3 px-2 py-3 rounded items-center">
      <img className="xl:h-56 lg:h-40 md:h-36 h-32 my-2" src={img} alt="" />
      <div className="px-2">
        <h1>{name?.slice(0, 50)}...</h1>
        <p className="py-2">
          $<strong>{price}</strong>
        </p>
        <p>
          quantity:<strong> {quantity}</strong>
        </p>
        <button
          onClick={() => deleteFromCart(_id)}
          className="flex items-center py-2 mt-5 justify-between px-5 rounded  text-white bg-red-500  shadow-md hover:shadow-lg border"
        >
          <AiOutlineDelete className="text-2xl mr-1 mb-1" /> Remove from cart
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
