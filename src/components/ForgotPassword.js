import React, { useEffect, useState } from "react";
import login from "../images/login.svg";
import login2 from "../images/login2.svg";
import sms from "../images/sms-edit.svg";
import { Link } from "react-router-dom";

import line from "../images/line.svg";


const ForgotPassword = () => {

  useEffect(() => {
    // Disable scrolling when the component is mounted
    document.body.style.overflow = "hidden";

    // Cleanup: Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="max-h-[calc(100vh-5px)] flex items-center justify-center bg-gray-50">
      <div className="flex rounded-lg overflow-hidden max-w-4xl w-full pt-28">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <img src={login} alt="Login" className="h-[80%] object-cover" />
        </div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col items-center space-y-3">
            <img src={login2} alt="Logo" className="mb-6 w-24" />
            <h2 className="text-3xl font-bold mb-2 font-poppins">
              Forgot Password
            </h2>
            <p className="mb-6 text-gray-600 text-[10px] font-poppins sm:px-14 text-center">
              Please enter your email address to receive a verification code.
            </p>

            {/* Email Field */}
            <label className="w-full text-left mb-1 text-gray-700 font-semibold">
              Your Email
            </label>
            < div className="relative w-full mb-8 ">
              <img
                src={sms}
                alt="sms icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="email"
                placeholder="User123@gmail.com"
                className="shadow-gray-200 shadow-xl w-full pl-14 pr-10 p-3 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
              <img
                src={line}
                alt="line icon"
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>

           
          </div>
          
          
          
          <Link to="/verification" > 
          <button className="mt-10 w-full bg-bton text-white  py-4 rounded-lg font-semibold">
          SEND MAIL
          </button>
          </Link>
          
          
           
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
