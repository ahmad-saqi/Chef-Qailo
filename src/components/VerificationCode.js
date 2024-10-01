import React, { useEffect, useRef } from "react";
import login from "../images/login.svg";
import login2 from "../images/login2.svg";
import { Link } from "react-router-dom";

const VerificationCode = () => {
  useEffect(() => {
    // Disable scrolling when the component is mounted
    document.body.style.overflow = "hidden";

    // Cleanup: Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Create an array of refs for the input fields
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    
    // Move to next input if a character is entered
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    // Move back to previous input on backspace
    if (event.key === "Backspace" && index > 0 && !event.target.value) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="max-h-[calc(100vh-5px)] flex items-center justify-center bg-gray-50">
      <div className="flex rounded-lg overflow-hidden max-w-4xl w-full pt-28">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <img src={login} alt="Login" className="h-[80%] object-cover" />
        </div>
        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col items-center">
            <img src={login2} alt="Logo" className="mb-6 w-24" />
            <h2 className="text-3xl font-bold mb-2">Verification Code</h2>
            <p className="mb-6 text-gray-600 text-[10px] text-center sm:px-10">
              Please enter the verification code sent to your email
              <span className="font-bold ml-1">your@email.com</span>
            </p>
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(6)].map((_, idx) => (
                <input
                  key={idx}
                  type="text"
                  maxLength="1"
                  ref={(el) => (inputRefs.current[idx] = el)} // Assign ref to each input
                  onChange={(event) => handleInputChange(idx, event)}
                  onKeyDown={(event) => handleKeyDown(idx, event)}
                  className="w-10 h-12 text-center text-xl shadow-lg rounded-lg border-gray-300 focus:outline-none focus:border-red-500"
                />
              ))}
            </div>
            
          </div>
          <Link to="/reset-password">
          <button className="mt-8 w-full  bg-bton text-white py-4 rounded-lg font-semibold">
              VERIFY
            </button>
          </Link>         
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
