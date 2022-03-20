import React from "react";
import { useSelector } from "react-redux";
import CartCost from "./CartCost";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

const CartLayout = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="bg-blue-50 py-20">
      <div className="md:w-9/12 w-11/12 mx-auto   rounded">
        <h1 className="text-2xl font-medium py-4">Your shopping cart</h1>
        {cart?.length ? (
          <div className="grid md:grid-cols-6 bg-white">
            <div className=" lg:col-span-5 md:col-span-4 px-3 py-5">
              {cart?.map((pd) => (
                <CartProduct key={pd._id} product={pd} />
              ))}
            </div>

            {/* // payment system  */}
            <div className="lg:col-span-1 md:col-span-2 border-l px-2 py-5">
              <CartCost />
            </div>
          </div>
        ) : (
          <div>
            <p>
              Nothing in your Cart. Please make sure to add{" "}
              <Link className="text-blue-500 underline" to="/products">
                products
              </Link>{" "}
              on cart
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartLayout;
