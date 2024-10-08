// src/pages/Dashboard.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Statistics from '../components/Statistics';
import UserTable from '../components/UserTable';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Navbar */}
      <Navbar />

      <div className="flex-grow p-4 md:p-6 bg-gray-100">
        {/* Header */}
        <Header />

        {/* Statistics */}
        <Statistics />

        {/* User Table */}
        <UserTable />
      </div>
    </div>
  );
};

export default Dashboard;
