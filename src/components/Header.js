// src/components/Header.js
import React from 'react';
import profile from '../images/profile.svg';
import coins from '../images/coin.svg';
import money from '../images/moneys.svg'
const Header = () => {
  const stats = [
    { title: 'Users', value: '2659', icon: profile },
    { title: 'Monthly Sales', value: '$2659.00', icon: coins },
   
    { title: 'Sales', value: '2659', icon:money },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-xl p-8 flex justify-start items-center space-x-5  "
        >
          <div>
          <img src={stat.icon} alt={stat.title} className='bg-[#006E681F] p-4 rounded-full' />
          </div>
          <div>
            <h4 className="text-gray-600">{stat.title}</h4>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </div>

         
        </div>
      ))}
    </div>
  );
};

export default Header;
