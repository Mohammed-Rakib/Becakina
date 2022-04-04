import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import cogoToast from "cogo-toast";

import { signin } from "../../redux/slices/userSlice";

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    axios
      .post(
        "https://still-eyrie-85728.herokuapp.com/api/users/signin",
        userInfo
      )
      .then((response) => {
        dispatch(signin(response.data));
        navigate("/");
        const options = { position: "bottom-center" };
        cogoToast.success("Signin successfull", options);
      })
      .catch((error) => {
        const options = { position: "bottom-center" };
        cogoToast.error("Authentication failed", options);
      });
  };
  return (
    <div className="md:px-0 px-2">
      <h1 className="text-3xl font-thin text-center italic text-yellow-800">
        Sign In.
      </h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <div className="">
          <p className="">Email</p>
          <input
            className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.email && (
            <span className="text-sm text-red-500 block">
              email is required
            </span>
          )}
        </div>
        {/* password  */}
        <div className="py-4">
          <p className="">password</p>
          <input
            className="md:w-96 w-full py-1  border border-slate-300 rounded focus:outline-none  px-2"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.{6,})/,
            })}
          />
          {/* errors will return when field validation fails  */}
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "required" && "password  is required"}
          </span>
          <span className="text-sm text-red-500 block">
            {errors.password?.type === "pattern" &&
              "password must be 6 characters"}
          </span>
        </div>

        {/* submit button */}
        <div className="flex justify-center py-4">
          <input
            type="submit"
            className="border px-5 py-2 rounded cursor-pointer bg-pink-500 text-white hover:bg-pink-600 hover:text-white transition-all duration-300 "
            value="Continue"
          />
        </div>
      </form>
      <h1 className="text-center">
        New here?{" "}
        <Link className="underline text-blue-700" to="/signup">
          Join Becakina
        </Link>
      </h1>
    </div>
  );
};

export default SigninForm;
