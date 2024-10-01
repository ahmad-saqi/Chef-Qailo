import React, { useEffect, useState } from "react";
import login from "../images/login.svg";
import login2 from "../images/login2.svg";
import lock from "../images/lock.svg";
import line from "../images/line.svg";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState([false, false]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true); // State to track if passwords match

  useEffect(() => {
    // Disable scrolling when the component is mounted
    document.body.style.overflow = "hidden";

    // Cleanup: Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Toggle password visibility for the specific input
  const togglePasswordVisibility = (index) => {
    setShowPassword((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  // Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword); // Check if passwords match
  };

  // Handle confirm password input change
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(password === event.target.value); // Check if passwords match
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
            <h2 className="text-3xl font-bold mb-2 font-poppins">Reset Password</h2>
            <p className="mb-6 text-gray-600 text-[10px] font-poppins">
              Please enter new password in Chefoxi.
            </p>

            {/* Password Field */}
            <label className="w-full text-left mb-1 text-gray-700 font-semibold">
              Create New Password
            </label>
            <div className="relative w-full mb-4">
              <img
                src={lock}
                alt="lock icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type={showPassword[0] ? "text" : "password"}
                placeholder="*************"
                value={password}
                onChange={handlePasswordChange} // Handle password input change
                className="w-full pl-14 pr-10 p-3 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
              />
              <img
                src={line}
                alt="line icon"
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                onClick={() => togglePasswordVisibility(0)}
              >
                {showPassword[0] ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>

            {/* Confirm Password Field */}
            <label className="w-full text-left mb-1 text-gray-700 font-semibold">
              Confirm New Password
            </label>
            <div className="relative w-full mb-4">
              <img
                src={lock}
                alt="lock icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type={showPassword[1] ? "text" : "password"}
                placeholder="*************"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange} // Handle confirm password input change
                className={`w-full pl-14 pr-10 p-3 border rounded-lg text-gray-700 focus:outline-none ${
                  passwordMatch ? "border-gray-300" : "border-red-500"
                }`}
              />
              <img
                src={line}
                alt="line icon"
                className="absolute left-8 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                onClick={() => togglePasswordVisibility(1)}
              >
                {showPassword[1] ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </div>
            </div>

            {/* Password Match Feedback */}
            {!passwordMatch && (
              <p className="text-red-500 text-xs mb-4">Passwords do not match</p>
            )}
          </div>
          <Link to="/">
            <button
              className="mt-6 w-full bg-bton text-white py-4 rounded-lg font-semibold"
              disabled={!passwordMatch || !password || !confirmPassword} // Disable button if passwords don't match or are empty
            >
              Update Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
