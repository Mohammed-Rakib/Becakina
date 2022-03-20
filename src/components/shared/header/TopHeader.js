import React from "react";

const TopHeader = () => {
  return (
    <div className="py-2 bg-gray-800  md:block hidden">
      <div className="md:w-9/12 w-11/12 mx-auto flex justify-between align-center">
        <p className="text-pink-600">Default Welcome message</p>
        <div className="">
          <select className="focus:outline-none mr-3 px-2">
            <option value="USD">USD</option>
            <option value="USD">BDT</option>
          </select>
          <select className="focus:outline-none px-2">
            <option value="English">English</option>
            <option value="English">Bangla</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
