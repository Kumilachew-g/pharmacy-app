import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import logo from "../../assets/fulllogo.png";
import google from "../../assets/google.svg";
import illustration from "../../assets/signup.svg";

const Signup = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm bg-purple-200 mr-auto">
        <div class="grid grid-rows-2">
          <div class="items-center py-5 px-10">
            <img
              src={logo}
              alt=""
              className="mr-auto object-scale-down h-12"
            ></img>
          </div>
          <div class="h-20 p-5">
            <img
              src={illustration}
              alt=""
              className="ml-auto mr-auto object-fit"
            ></img>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="h-screen flex">
          <div className="w-full max-w-md m-auto bg-white py-5 px-10">
            <h1 className="text-4xl font-medium mt-1 antialiased mb-6 text-center">
              Welcome
            </h1>
            <form>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  className={`w-full p-2 text-primary border rounded-lg-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
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
                  className={`w-full p-2 text-primary border rounded-lg-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
                  id="password"
                  placeholder="Your Password"
                />
              </div>
              <div>
                <label htmlFor="companyname" className="text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="companyname"
                  className={`w-full p-2 text-primary border rounded-lg-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="companyname"
                  placeholder="Huma Medical Store"
                />
              </div>
              <div>
                <label
                  htmlFor="businesslocation"
                  className="text-sm font-medium"
                >
                  Business Location
                </label>
                <input
                  type="businesslocation"
                  className={`w-full p-2 text-primary border rounded-lg-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  id="businesslocation"
                  placeholder="Delhi,NCR"
                />
              </div>

              <div class="flex mt-4">
                <label class="flex items-center">
                  <input type="checkbox" class="form-checkbox"></input>
                  <span class="ml-2 text-sm">
                    By signing up you agree to our{" "}
                    <a href="#" className="text-secondary">
                      Privacy poilicy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-secondary">
                      T&C
                    </a>
                  </span>
                </label>
              </div>

              <div className="flex justify-center items-center mt-6">
                <Link to="/dash" class="w-full">
                  <button
                    className={`w-full bg-primary py-2 px-4 text-sm text-white rounded-lg border focus:outline-none focus:`}
                  >
                    Register
                  </button>
                </Link>
              </div>
            </form>
            <div className="flex flex-wrap mt-3">
              <Link to="/dash" class="w-full">
                <button
                  className={`w-full rounded-lg border py-2 px-4 focus:outline-none`}
                >
                  <div class="flex flex-row justify-center">
                    <div class="h-5 px-2">
                      <img src={google} alt="" className="object-fit"></img>
                    </div>
                    <div className="self-center text-sm text-subtle">
                      Continue with Google
                    </div>
                  </div>
                </button>
              </Link>
            </div>
            <div className="text-sm font-medium mt-4">
              Already a member?{" "}
              <Link to="/login" class="text-secondary">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;