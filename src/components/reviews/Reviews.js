import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [widths, setWidths] = useState(0);

  useEffect(() => {
    const reviewLoad = async () => {
      const response = await fetch(
        "https://still-eyrie-85728.herokuapp.com/api/reviews"
      );
      const data = await response.json();
      setReviews(data);
    };
    reviewLoad();
  }, [reviews]);

  // responsive swiper
  useEffect(() => {
    function handleResize() {
      setWidths(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("mouseover", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("mouseover", handleResize);
    };
  }, []);
  return (
    <section className="bg-blue-50 pb-12">
      <div className="md:w-9/12 w-11/12 mx-auto ">
        <h2 className="text-center text-3xl  font-semibold py-6">
          Customers Reviews
        </h2>
        <Swiper
          slidesPerView={`${widths < 780 ? 1 : 3}`}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className=" py-2 grid  md:grid-cols-3 gap-2  sm:grid-cols-2 grid-cols-1">
            {reviews?.slice(0, 6).map((review) => (
              <SwiperSlide key={review._id}>
                <Review topSelling={true} review={review}></Review>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="flex justify-center py-5">
          <Link
            className="px-5 flex justify-center items-center py-2 rounded-3xl bg-pink-500 text-white"
            to="/reviews"
          >
            Read All Reviews <BsArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
