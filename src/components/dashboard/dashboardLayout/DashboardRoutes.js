import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../../redux/slices/userSlice";
import { FcViewDetails } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { FcEditImage } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const DashboardRoutes = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // modal
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  // singout
  const logOut = () => {
    navigate("/");
    dispatch(signOut());
  };
  return (
    <>
      <div className="lg:hidden flex justify-end pb-4">
        <BsFillArrowLeftSquareFill
          className="text-3xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <Link
        className="flex items-center   px-4 py-2 rounded my-3 border"
        to="/dashboard/default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FcViewDetails className="text-xl mr-2" /> Dashboard
      </Link>
      <Link
        className="flex items-center   px-4 py-2 rounded my-3 border"
        to="/dashboard/profile"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CgProfile className="text-xl mr-2 text-cyan-400" /> Profile
      </Link>
      <Link
        className="flex items-center   px-4 py-2 rounded my-3 border"
        to="/dashboard/editProfile"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FcEditImage className="text-xl mr-2" /> Edit Profile
      </Link>
      <Link
        className="flex items-center   px-4 py-2 rounded my-3 border"
        to="/dashboard/orders"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdOutlineProductionQuantityLimits className="text-xl mr-2 text-cyan-500" />{" "}
        Orders
      </Link>

      <div className="absolute bottom-3">
        <div
          className="flex items-center justify-between  w-56 px-4 py-2 rounded my-3 border"
          onClick={() => setTrigger(!trigger)}
        >
          <span>{user?.username}</span>{" "}
          {trigger ? <BsChevronDown /> : <IoIosArrowUp className="text-lg" />}
        </div>

        {/* {trigger && ( */}
        <div>
          <button
            onClick={logOut}
            className="block bg-red-500 text-white w-56  px-4 py-1 rounded "
          >
            Sign Out
          </button>
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default DashboardRoutes;
