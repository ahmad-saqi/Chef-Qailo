// src/components/Header.js
import React from 'react';
import profile from '../images/profile.svg';
import coins from '../images/coin.svg';
import money from '../images/moneys.svg';

const Header = () => {
  const stats = [
    { title: 'Users', value: '2659', icon: profile },
    { title: 'Monthly Sales', value: '$2659.00', icon: coins },
    { title: 'Sales', value: '2659', icon: money },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex items-center space-x-4"
        >
          <div>
            <img
              src={stat.icon}
              alt={stat.title}
              className="bg-[#006E681F] p-2 rounded-full w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
          <div>
            <p className="text-lg sm:text-xl font-semibold">{stat.value}</p>
            <h4 className="text-gray-600 text-sm">{stat.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
