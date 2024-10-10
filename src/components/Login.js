import React, { useEffect, useState } from "react";
import login from "../images/login.svg";
import login2 from "../images/login2.svg";
import sms from "../images/sms-edit.svg";
import lock from "../images/lock.svg";
import line from "../images/line.svg";

import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Disable scrolling when the component is mounted
    document.body.style.overflow = "hidden";

    // Cleanup: Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="max-h-[calc(100vh-5px)] flex items-center justify-center bg-gray-50">
      <div className="flex rounded-lg overflow-hidden max-w-4xl w-full pt-28">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <img src={login} alt="Login" className="h-[80%] object-cover" />
        </div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 px-8">
          <div className="flex flex-col items-center">
            <img src={login2} alt="Logo" className="mb-6 w-24" />
            <h2 className="text-3xl font-bold mb-2 font-poppins">
              Welcome Back
            </h2>
            <p className="mb-6 text-gray-600 text-[10px] font-poppins">
              Log in to your existing account of Chefoxi.
            </p>

            {/* Email Field */}
            <label className="w-full text-left mb-1 text-gray-700 font-semibold">
              Your Email
            </label>
            <div className="relative w-full mb-4">
              <img
                src={sms}
                alt="sms icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="email"
                placeholder="User123@gmail.com"
                className="w-full pl-14 pr-10 p-3 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
              <img
                src={line}
                alt="line icon"
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>

            {/* Password Field */}
            <label className="w-full text-left mb-1 text-gray-700 font-semibold">
              Password
            </label>
            <div className="relative w-full mb-4">
              <img
                src={lock}
                alt="lock icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="*************"
                className="w-full pl-14 pr-10 p-3 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
              <img
                src={line}
                alt="line icon"
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
             
              <div  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"     onClick={togglePasswordVisibility}>
              {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
              
              } 
        
              </div>
            </div>

            <div className="w-full flex justify-end mb-4">
              <span></span>
              <Link to="/forgot-password" className="text-red-500">Forgot Password?</Link>
              <a href="#" className="text-red-500">
                
              </a>
            </div>
            <button className="w-full bg-bton text-white py-4 rounded-lg font-semibold">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
