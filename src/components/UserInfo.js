import React, { useState, useRef, useEffect } from "react";
import profile from "../images/login2.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PaymentsChart from "./PaymentsChart";

const UserInfo = () => {
  // State to manage the payment status
  const [paymentStatus, setPaymentStatus] = useState("Paid");
  // State to show/hide the dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);

  // Reference to the dropdown element
  const dropdownRef = useRef(null);

  // Function to toggle payment status
  const togglePaymentStatus = (status) => {
    setPaymentStatus(status);
    setShowDropdown(false); // Close dropdown after selection
  };

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white px-4 sm:px-6 items-center py-8">
      <div className="flex flex-col items-center space-y-2">
        <img
          src={profile}
          alt="Profile"
          className="bg-[#fff] p-1 rounded-full w-[30%] border-2"
        />
        <h1 className="font-semibold text-xl font-poppins">John Deo</h1>
        <p className="text-sm font-normal font-poppins opacity-50 pb-4">
          UI/UX Designer
        </p>
        <div className="flex items-center bg-[#eee] w-full h-[2px]"></div>
      </div>

      <div className="flex flex-row items-center justify-between pt-4 relative">
        <p className="text-sm font-normal font-poppins opacity-50">Payment:</p>
        <p className="text-sm font-normal font-poppins pr-16">{paymentStatus}</p>
        
        {/* Three dots icon for dropdown */}
        <div className="relative" ref={dropdownRef}>
          <BsThreeDotsVertical
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer"
          />
          {/* Dropdown menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 p-2 w-24 bg-white border rounded shadow-md z-10 space-y-1 rounded-md">
              <div
                className="px-4 py-1 text-sm cursor-pointer bg-[#F74821] bg-opacity-20 rounded-md"
                onClick={() => togglePaymentStatus("Paid")}
              >
                Paid
              </div>
              <div
                className="px-4 py-1 text-sm cursor-pointer bg-[#F74821] bg-opacity-20 rounded-md"
                onClick={() => togglePaymentStatus("Unpaid")}
              >
                Unpaid
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-3 pt-8">
        <h1 className="text-xl font-semibold font-poppins">Contact Info</h1>
        <div className="flex flex-col space-y-3">
          <div className="flex flex-row items-center space-x-3 text-black opacity-40">
            <IoMail /> <p>kajope4182@ummoh.com</p>
          </div>
          <div className="bg-[#eee] h-[1px]"></div>
          <div className="flex flex-row items-center space-x-3 text-black opacity-40">
            <FaPhoneAlt /> <p>33757005467</p>
          </div>
          <div className="bg-[#eee] h-[1px]"></div>
          <div className="flex flex-row items-center space-x-3 text-black opacity-40">
            <FaLocationDot /> <p>2239 Hog Camp Road Schaumburg</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <PaymentsChart />
      </div>
    </div>
  );
};

export default UserInfo;
