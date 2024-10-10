// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';

import HeaderUserList from '../components/HeaderUserList';
import UserTableUserList from '../components/UserTableUserList';

const UserList = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      {/* Navbar */}
      <Navbar className="md:w-[18%]" />

      <div className="flex-grow p-4 md:p-6 bg-gray-100 w-[82%] ">
       

        {/* Statistics */}
        <HeaderUserList  />

        {/* User Table */}
        <UserTableUserList  />
      </div>
    </div>
  );
};

export default UserList;
