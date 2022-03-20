import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="px-2 py-5">
      <div className="flex justify-center">
        <img src="https://i.postimg.cc/Rh17ymFF/download.jpg" alt="" />{" "}
      </div>
      <h1 className="text-center py-5 text-2xl font-bold capitalize">
        {user?.username}
      </h1>
      <h1 className="text-center">{user?.email}</h1>
    </div>
  );
};

export default Profile;
