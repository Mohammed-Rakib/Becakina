import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, fetchProducts } from "../../redux/slices/productSlice";
import StarRatings from "react-star-ratings";
import { AiOutlineShopping } from "react-icons/ai";
import Product from "./product";
import cogoToast from "cogo-toast";

const Details = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const { id } = useParams();

  let product = products.find((product) => product._id === id);
  const relatedProducts = products.filter(
    (pd) => pd.category === product.category
  );
  const withOutSelectedOne = relatedProducts.filter((pd) => pd._id !== id);

  // quantity increases
  const quantityIncrease = () => {
    if (quantity === product?.stock) {
    } else {
      setQuantity(quantity + 1);
    }
  };
  // quantity decreases
  const quantityDecrease = () => {
    if (quantity === 1) {
    } else {
      setQuantity(quantity - 1);
    }
  };

  // add to cart
  const addToCartWithQuantity = () => {
    const pd = { ...product, quantity: quantity };
    dispatch(addToCart(pd));

    const options = { position: "bottom-center" };
    cogoToast.success("add to the cart!", options);
  };

  return (
    <section className="bg-gray-50 py-5 ">
      <div className="md:w-9/12 w-11/12 mx-auto bg-white py-5 shadow-lg rounded">
        {status === "pending" ? (
          <p className="py-10 flex items-center justify-center text-red-400">
            product loading...
          </p>
        ) : (
          <div className="md:flex block p-6 rounded-xl  space-x-4">
            <div className="shrink-0 flex items-center justify-center">
              <img src={product?.img} alt="" />
            </div>

            <div>
              <h4 className="">{product?.name}</h4>
              <h6 className="py-2 text-sm">
                Category: <strong>{product?.category}</strong>
              </h6>
              <h6 className=" text-sm">
                Stock: <strong>{product?.stock}</strong>
              </h6>
              <h6 className="py-2">
                price: $<strong>{product?.price}</strong>
              </h6>
              <p>
                ratings:{" "}
                <StarRatings
                  rating={product?.star}
                  starRatedColor="orange"
                  starDimension="20px"
                  starSpacing="1px"
                />
              </p>

              <div className="flex items-center space-x-4 pt-3">
                <button
                  onClick={quantityIncrease}
                  className="text-2xl px-2  border rounded"
                >
                  +
                </button>
                <span className="text-2xl">{quantity}</span>
                <button
                  onClick={quantityDecrease}
                  className="text-2xl px-2  border rounded"
                >
                  -
                </button>
              </div>
              <button
                onClick={addToCartWithQuantity}
                className="flex items-center py-2 mt-5 justify-between px-5 rounded  text-black bg-white  shadow-md hover:shadow-lg border"
              >
                <AiOutlineShopping className="text-2xl mr-1 mb-1" /> Add To Cart
              </button>
            </div>
          </div>
        )}
      </div>

      {/* // related Products */}
      <div className="py-5 md:w-9/12 w-11/12 mx-auto">
        <h3 className="py-4 text-lg">Related Products</h3>
        <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
          {withOutSelectedOne.slice(0, 3).map((pd) => (
            <Product key={pd._id} product={pd} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
