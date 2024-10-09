// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';

import HeaderUserList from '../components/HeaderUserList';
import UserTableUserList from '../components/UserTableUserList';

const UserList = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Navbar */}
      <Navbar />

      <div className="flex-grow p-4  bg-gray-100  ">
       

        {/* Statistics */}
        <HeaderUserList  />

        {/* User Table */}
        <UserTableUserList  />
      </div>
    </div>
  );
};

export default UserList;
