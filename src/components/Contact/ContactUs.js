import React from "react";

const ContactUs = () => {
  return (
    <div className=" lg:w-9/12 md:w-10/12 sm:w-11/12 w-11/12 flex items-center justify-center  flex-wrap mx-auto py-10">
      <div>
        <img
          src="https://i.postimg.cc/Cx1KS4c6/contact-us-illustration-free-vector-removebg-preview.png"
          alt=""
        />
      </div>
      <div>
        <h1 className="text-3xl font-thin py-5 text-center italic text-yellow-800">
          Contact Us.
        </h1>
        {/* username */}
        <div className="py-4">
          <p className=" italic">Username</p>
          <input
            className="focus:outline-none w-full border border-gray-400 rounded px-3 py-2"
            type="text"
          />
        </div>
        {/* email */}
        <div className="py-2">
          <p className=" italic">Email</p>
          <input
            className="focus:outline-none w-full border border-gray-400 rounded px-3 py-2"
            type="email"
          />
        </div>
        {/* message */}
        <div className="py-4">
          <p className=" italic">Message</p>
          <textarea
            name=""
            id=""
            className="focus:outline-none w-full border border-gray-400 rounded px-3 py-2"
            cols="30"
            rows="4"
          ></textarea>
        </div>

        <div className="text-center py-5">
          <button className="px-5 rounded bg-blue-800 text-white py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
