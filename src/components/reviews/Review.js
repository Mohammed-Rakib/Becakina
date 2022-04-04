import React from "react";
import StarRatings from "react-star-ratings";

const Review = ({ review }) => {
  return (
    <div className="mx-2 my-2 bg-white xl:px-2 px-1 rounded py-2 hover:shadow-lg text-center transition-all duration-600">
      <div className="flex justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyCbJoUCRscGfzySEtqoR5HtHnEOE0ux4r-A&usqp=CAU"
          className="h-20 w-20 "
          alt=""
        />
      </div>
      <h5 className="text-xl font-medium py-3">{review?.userId.username}</h5>
      <p>
        <StarRatings
          rating={review?.rating}
          starRatedColor="orange"
          starDimension="20px"
          starSpacing="1px"
        />
      </p>
      <p className="py-3">{review?.feedback.slice(0, 65)}</p>
    </div>
  );
};

export default Review;
