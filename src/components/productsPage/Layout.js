import React, { useEffect, useState } from "react";

import Product from "../product/product";

const Layout = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  let size = 15;

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const res = await fetch(
        `https://still-eyrie-85728.herokuapp.com/api/products?page=${page}&&size=${size}&&name=${text.toLowerCase()}`
      );
      const data = await res.json();
      setProducts(data.data);
      setPages(Math.ceil(data.count / size));
      setLoading(false);
    };
    fetchProducts();
  }, [page]);

  // searchHandler
  const searchHandler = async () => {
    setLoading(true);

    const res = await fetch(
      `https://still-eyrie-85728.herokuapp.com/api/products?page=${page}&&size=${size}&&name=${text.toLowerCase()}`
    );
    const data = await res.json();
    setProducts(data.data);
    setPages(Math.ceil(data.count / size));
    setLoading(false);
  };

  // filter products
  const filterProducts = async (e) => {
    setLoading(true);
    setCategory(e.target.value);
    setText(e.target.value);

    fetch(
      `https://still-eyrie-85728.herokuapp.com/api/products?page=${page}&&size=${size}&&name=${e.target.value.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setPages(Math.ceil(data.count / size));
        setLoading(false);
      });
  };

  // next page handler
  const nextPage = () => {
    if (page + 1 >= pages) {
    } else {
      setPage(page + 1);
    }
  };

  // previous page handler
  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    } else {
    }
  };

  return (
    <section className="py-5 bg-blue-50">
      <div className="md:w-9/12 w-11/12 mx-auto">
        {/* // search for products  */}
        <div className=" py-10 flex flex-wrap lg:justify-between justify-center items-center">
          {/* // filter products */}
          <select
            value={category}
            className="focus:outline-none w-56 px-4 py-2 my-2"
            onChange={filterProducts}
          >
            <option value="">All Products</option>
            <option value="laptop">Laptop</option>
            <option value="camera">Camera</option>
            <option value="android">Android</option>
          </select>

          {/* // search products */}
          <div className="flex items-center justify-center my-2">
            <input
              type="text"
              className="focus:outline-none border md:w-96 w-full border-gray-400 rounded px-2 py-2"
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
        </div>

        {/* // all products  */}
        {loading === true ? (
          <div className="py-56 flex justify-center items-center">
            <p className="text-red-500">Products loading...</p>
          </div>
        ) : (
          <div>
            {products?.length === 0 && (
              <p className="text-red-500 text-center py-20">
                No products found
              </p>
            )}
            <div className="py-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
              {products?.map((product) => (
                <Product key={product._id} product={product} />
              ))}
            </div>

            {pages > 0 && (
              <div className="flex justify-center items-center py-5">
                <button
                  onClick={prevPage}
                  className="px-3 py-1 bg-white rounded border"
                >
                  {"<"}
                </button>
                {[...Array(pages).keys()].map((num, i) => (
                  <button
                    onClick={() => setPage(num)}
                    className={
                      num === page
                        ? "px-3 py-1 mx-1 bg-pink-500 text-white rounded border"
                        : "px-3 py-1 mx-1 bg-white rounded border"
                    }
                    key={i}
                  >
                    {num + 1}
                  </button>
                ))}
                <button
                  onClick={nextPage}
                  className="px-3 py-1 bg-white rounded border"
                >
                  {">"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Layout;
