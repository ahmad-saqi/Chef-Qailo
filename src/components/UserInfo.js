import React from "react";
import profile from "../images/login2.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
const UserInfo = () => {
  return (
    <div className="bg-white px-4 sm:px-6  items-center h-svh">
      <div className="flex flex-col items-center space-y-3">
        <img
          src={profile}
          alt="Profile"
          className="bg-[#fff] p-1 rounded-full w-[30%]  border-2 "
        />
        <h1 className="font-semibold text-xl font-poppins">John Deo</h1>
        <p className="text-sm font-normal font-poppins opacity-50">
          UI/UX Designer
        </p>
        <div className="flex items-center bg-[#eee] w-full h-1 "></div>
      </div>
      <div className="flex flex-row items-center  justify-between">
        <p className="text-sm font-normal font-poppins opacity-50 ">Payment:</p>
        <p className="text-sm font-normal font-poppins">Paid</p>
        <BsThreeDotsVertical />
      </div>
      <div>
        <h1 className="text-xl font-semibold font-poppins">Contact Info</h1>

      </div>
    </div>
  );
};

export default UserInfo;
