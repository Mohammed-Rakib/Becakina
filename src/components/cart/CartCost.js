import React from "react";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

const CartCost = () => {
  const cart = useSelector((state) => state.cart.cart);

  const items = cart.reduce((quantity, item) => quantity + item.quantity, 0);
  const shippingCost = cart.reduce(
    (shipping, item) => shipping + item.shipping * item.quantity,
    0
  );
  const subtotalCost = cart.reduce(
    (subtotal, item) => subtotal + item.price * item.quantity,
    0
  );

  const total = (shippingCost + subtotalCost).toFixed(2);

  return (
    <div>
      <p className="py-3 ">
        Items: <strong>{items}</strong>
      </p>
      <p className="py-3">
        shipping: $<strong>{shippingCost.toFixed(2)}</strong>{" "}
      </p>
      <p className="pb-3">
        subtotal: $
        <strong>
          <CurrencyFormat
            value={subtotalCost.toFixed(2)}
            displayType={"text"}
            thousandSeparator={true}
          />
        </strong>
      </p>

      <p className="py-5 border-t">
        Total: $
        <strong>
          <CurrencyFormat
            value={total}
            displayType={"text"}
            thousandSeparator={true}
          />
        </strong>
      </p>
      <div className="flex ">
        <Link
          to="/checkout"
          className="shadow-lg py-2 px-3 bg-green-700 text-white text-center rounded border border-gray-100"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartCost;
