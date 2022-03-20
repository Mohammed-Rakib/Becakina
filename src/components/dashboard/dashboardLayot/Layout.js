import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { signOut } from "../../../redux/slices/userSlice";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

const Layout = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  return (
    <section className="bg-blue-50 ">
      <Header />
      <div className="md:w-9/12 w-11/12 mx-auto py-20 bg-white rounded mb-20 mt-10">
        <div className="grid grid-cols-12 px-2">
          <div className="xl:col-span-2 lg:col-span-3 md:col-span-4 col-span-12 px-3 flex flex-col justify-center">
            <Link
              className="block bg-[#12877c] text-center text-white px-4 py-1 rounded my-3"
              to="/dashboard/profile"
            >
              Profile
            </Link>
            <Link
              className="block bg-[#12877c] text-center text-white px-4 py-1 rounded my-3"
              to="/dashboard/editProfile"
            >
              Edit Profile
            </Link>
            <Link
              className="block bg-[#12877c] text-center text-white px-4 py-1 rounded my-2"
              to="/dashboard/orders"
            >
              Orders
            </Link>
            <button
              onClick={() => dispatch(signOut())}
              className="block bg-red-500 text-center text-white px-4 py-1 rounded mt-20"
            >
              Sign Out
            </button>
          </div>
          <div className="xl:col-span-10 lg:col-span-9 md:col-span-8 col-span-12">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
