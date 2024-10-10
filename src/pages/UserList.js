// src/pages/Dashboard.js
import React from "react";
import Navbar from "../components/Navbar";

import HeaderUserList from "../components/HeaderUserList";
import UserTableUserList from "../components/UserTableUserList";
import UserInfo from "../components/UserInfo";

const UserList = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-col md:flex-row flex-grow px-4 md:space-x-4  bg-gray-100 w-[100%] ">
        <div className="md:w-[75%]">
          {/* Statistics */}
          <HeaderUserList />

          {/* User Table */}
          <UserTableUserList />
        </div>
        <div className="md:w-[25%]">
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default UserList;
