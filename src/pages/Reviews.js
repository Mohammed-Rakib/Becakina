import React, { useEffect, useState } from "react";
import Review from "../components/reviews/Review";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://still-eyrie-85728.herokuapp.com/api/reviews")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setReviews(data);
      });
  }, []);
  return (
    <>
      <Header />

      <section className="bg-blue-50 pb-12">
        {loading ? (
          <div>
            <p className="text-center py-56 text-red-500">Reviews Loading...</p>
          </div>
        ) : (
          <div className="md:w-9/12 w-11/12 mx-auto ">
            <h2 className="text-center text-3xl  font-semibold py-9">
              Customers Reviews
            </h2>

            <div className=" py-2 grid  md:grid-cols-3 gap-2  sm:grid-cols-2 grid-cols-1">
              {reviews?.slice(0, 6).map((review) => (
                <Review
                  topSelling={true}
                  reviewPage={true}
                  review={review}
                ></Review>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Reviews;
