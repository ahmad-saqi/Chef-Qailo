import React from "react";
import login2 from "../images/login2.svg";
import Category from "../images/Category.svg";
import profile from "../images/profile.svg";

const Navbar = () => {
  return (
    <div className="w-[18%] h-svh sticky top-0 bg-white flex flex-col">
      {/* Logo section */}
      <div className=" p-4">
        <img src={login2} alt="Logo" className="w-[60%] mx-auto" />
      </div>

      {/* Scrollable navigation */}
      <div className="flex-1 overflow-y-auto p-6">
        <nav>
          <ul className="space-y-4">
            <li className="text-gray-500 hover:text-orange-500 flex items-center space-x-2">
              <i className="fas fa-th-large">
                {" "}
                <img src={Category} className="p-2 rounded" />
              </i>{" "}
              Dashboard
            </li>
            <li className="text-gray-500 hover:text-orange-500 flex items-center space-x-2">
              <i className="fas fa-users">
                {" "}
                <img src={profile} className="p-2 rounded" />{" "}
              </i>{" "}
              Users List
            </li>
          </ul>
        </nav>
      </div>

      {/* Profile at the bottom */}
      <div className="p-6 flex items-center space-x-2">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Easin Arafat"
          className="rounded-xl w-12 h-12"
        />

        <div><p className="text-gray-600 text-sm font-semibold font-poppins">Easin Arafat</p>
        <p className="text-gray-400 text-xs font-normal font-poppins">Free Account</p></div>
      </div>
    </div>
  );
};

export default Navbar;
