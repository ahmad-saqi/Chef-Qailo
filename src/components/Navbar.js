// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="w-64 h-screen bg-white p-6">
      <div className="mb-6">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 mx-auto" />
      </div>
      <div>
        <nav>
          <ul className="space-y-4">
            <li className="text-gray-500 hover:text-orange-500">
              <i className="fas fa-th-large"></i> Dashboard
            </li>
            <li className="text-gray-500 hover:text-orange-500">
              <i className="fas fa-users"></i> Users List
            </li>
          </ul>
        </nav>
      </div>
      <div className="absolute bottom-4 left-6">
        <img
          src="/profile.jpg"
          alt="Easin Arafat"
          className="rounded-full w-12 h-12"
        />
        <p className="text-gray-600 mt-2">Easin Arafat</p>
        <p className="text-gray-400 text-xs">Free Account</p>
      </div>
    </div>
  );
};

export default Navbar;
