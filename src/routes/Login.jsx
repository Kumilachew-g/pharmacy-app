import React from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import illustration from "../assets/login.svg";

const Login = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="h-screen flex">
          <div className="w-full max-w-md m-auto bg-white py-5 px-10">
            <h1 className="text-4xl font-medium mt-4 antialiased mb-12 text-center">
              Welcome Back!
            </h1>
            <form>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out `}
                  id="password"
                  placeholder="Your Password"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-4">
                  forgot password ?
                </label>
              </div>
              <div className="flex justify-center items-center mt-6">
                <button
                  className={`w-full bg-primary py-2 px-4 text-sm text-white rounded border focus:outline-none focus:`}
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex flex-wrap mt-3">
              <button
                className={`w-full rounded border py-2 px-4 focus:outline-none`}
              >
                <div className="self-center text-sm text-subtle">
                  Continue with Google
                </div>
              </button>
            </div>
            <div className="text-sm font-medium mt-4">
              New here?{" "}
              <a href="#" className="text-secondary">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 xl:max-w-screen-sm bg-purple-200 ml-10">
        <div className="grid grid-rows-2">
          <div className="items-center py-5 px-10">
            <img
              src={logo}
              alt=""
              className="ml-auto object-scale-down h-7"
            ></img>
          </div>
          <div className="h-20 p-5">
            <img
              src={illustration}
              alt=""
              className="ml-auto mr-auto object-fit"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
