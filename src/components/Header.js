// src/components/Header.js
import React from 'react';

const Header = () => {
  const stats = [
    { title: 'Users', value: '2659', icon: 'fas fa-users' },
    { title: 'Monthly Sales', value: '$2659.00', icon: 'fas fa-dollar-sign' },
    { title: 'Monthly Profit', value: '$2659.00', icon: 'fas fa-money-bill' },
    { title: 'Sales', value: '2659', icon: 'fas fa-chart-line' },
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
        >
          <div>
            <h4 className="text-gray-600">{stat.title}</h4>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>
          <i className={`${stat.icon} text-3xl text-orange-500`}></i>
        </div>
      ))}
    </div>
  );
};

export default Header;
