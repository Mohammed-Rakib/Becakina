import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-gray-900 py-2  md:block hidden">
      <div className="md:w-9/12 w-11/12 mx-auto flex justify-between align-center">
        <p className="text-pink-600">Default Welcome message</p>
        <div className="text-white ">
          <select className="bg-gray-900 focus:outline-none mr-3">
            <option value="USD">USD</option>
          </select>
          <select className="bg-gray-900 focus:outline-none">
            <option value="English">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
