import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import Product from "../product/product";

const Layout = () => {
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);

  // products from database
  const prevProducts = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const [products, setProducts] = useState([...prevProducts]);

  const dispatch = useDispatch();

  // load products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // searchHandler
  const searchHandler = () => {
    const searchProducts = prevProducts.filter((pd) =>
      pd.name.toLowerCase().includes(text.toLocaleLowerCase().trim())
    );

    if (text === "") {
      setProducts(prevProducts);
      setIsShow(false);
    } else {
      if (!searchProducts.length) {
        setIsShow(false);
      }
      setProducts(searchProducts);
      setIsShow(true);
    }
  };

  return (
    <section className="py-5 bg-blue-50">
      <div className="md:w-9/12 w-11/12 mx-auto">
        {/* // search for products  */}
        <div className=" pt-5 flex justify-center items-center">
          <input
            type="text"
            className="focus:outline-none border border-gray-400 rounded px-2 py-2"
            placeholder="Search for products..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={searchHandler}
            className="py-2 px-4 bg-gray-800 text-white"
          >
            Search
          </button>
        </div>
        {/* // search results */}
        <div className="pt-3 text-center pb-5">
          {isShow && (
            <p>
              {products.length} products found for search "{text}"{" "}
            </p>
          )}
        </div>

        {/* // all products  */}
        {status === "pending" ? (
          <div className="py-10 flex justify-center items-center">
            <p className="text-red-500">Products loading...</p>
          </div>
        ) : (
          <div>
            {products.length === 0 && <p>No products found</p>}
            <div className="py-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
              {products.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Layout;
