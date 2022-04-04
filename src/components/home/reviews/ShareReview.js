import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import cogoToast from "cogo-toast";
import axios from "axios";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const ShareReview = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [feedback, setFeedback] = useState("");

  const user = useSelector((state) => state.user.user);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  // submit experience
  const addExperience = (e) => {
    e.preventDefault();
    if (!user) {
      cogoToast.warn("Please make sure to sign in", {
        position: "bottom-center",
      });
    } else if (user && currentValue === 0) {
      cogoToast.warn("Please rate us", {
        position: "bottom-center",
      });
    } else {
      const reviewData = {
        userId: user._id,
        rating: currentValue,
        feedback,
      };
      setCurrentValue(0);
      setFeedback("");
      axios
        .post("https://still-eyrie-85728.herokuapp.com/api/reviews", reviewData)
        .then((response) => {
          cogoToast.success("Thanks for your feedback!", {
            position: "bottom-right",
          });
        })
        .catch((err) => {
          cogoToast.error(err.message, { position: "bottom-right" });
        });
    }
  };
  return (
    <section className="bg-blue-50">
      <div className="md:w-9/12 w-11/12 mx-auto py-6">
        <h1 className="text-3xl text-center font-medium pb-4">
          Share Your Experience.
        </h1>
        <div className="flex justify-center py-3">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
        {/* feedback form */}
        <form className="mx-auto pt-3" onSubmit={addExperience}>
          <textarea
            className="border block p-3 w-full bg-transparent focus:outline-none"
            cols="30"
            rows="5"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="write something.."
            required
          ></textarea>
          <div className="text-center">
            <input
              className="my-5 bg-pink-500 hover:bg-pink-600 px-3 py-1 rounded text-white cursor-pointer"
              type="submit"
              value="Add Experience"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ShareReview;
