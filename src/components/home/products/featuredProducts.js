import React, { useEffect, useState } from "react";
import Product from "../../product/product";

const FeaturedProducts = () => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  let size = 15;

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const res = await fetch(
        `https://still-eyrie-85728.herokuapp.com/api/products?page=${page}&&size=${size}`
      );
      const data = await res.json();
      setProducts(data.data);
      setPages(Math.ceil(data.count / size));
      setLoading(false);
    };
    fetchProducts();
  }, [page]);

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
        <h1 className="text-3xl py-5   ">Feature Selling.</h1>
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

export default FeaturedProducts;
