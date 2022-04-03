import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import DashboardRoutes from "./DashboardRoutes";
import { CgMenuBoxed } from "react-icons/cg";
import { useSelector } from "react-redux";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  return (
    <section className="bg-blue-50 h-screen ">
      <div className="">
        <div className="lg:flex h-full ">
          <div
            className={`absolute lg:relative  z-10 bg-white w-72 h-screen py-10 px-3 lg:mr-2 lg:transform-none lg:opacity-100 lg:shadow-none shadow-2xl ${
              !isOpen
                ? "inset-0 opacity-0 transform duration-200 -translate-x-full ease-out"
                : "inset-0 opacity-100 transform duration-200 translate-x-0 ease-in"
            }`}
          >
            <div className="w-full">
              <DashboardRoutes setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
          </div>
          <div className="w-full h-screen flex-grow  overflow-y-scroll">
            <div className="w-full flex lg:justify-end justify-between items-center px-4 py-4 rounded bg-white">
              <CgMenuBoxed
                onClick={() => setIsOpen(!isOpen)}
                className=" lg:hidden block text-4xl text-cyan-600 cursor-pointer"
              />
              <div>
                <span>{user?.username}</span>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
