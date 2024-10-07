import React, { useState } from 'react';
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const users = [
  { name: 'John Deo', email: 'johndoe2211@gmail.com', payment: 'Paid', image: 'https://via.placeholder.com/30' },
  { name: 'Shelby Goode', email: 'shelbygoode481@gmail.com', payment: 'Unpaid', image: 'https://via.placeholder.com/30' },
  { name: 'Robert Bacins', email: 'robertbacins4182@gmail.com', payment: 'Paid', image: 'https://via.placeholder.com/30' },
  { name: 'John Carilo', email: 'johncarilo182@gmail.com', payment: 'Paid', image: 'https://via.placeholder.com/30' },
  { name: 'Adriene Watson', email: 'adrienewatson82@gmail.com', payment: 'Unpaid', image: 'https://via.placeholder.com/30' },
  { name: 'Michael Smith', email: 'michael.smith@gmail.com', payment: 'Paid', image: 'https://via.placeholder.com/30' },
  { name: 'Jane Doe', email: 'janedoe2211@gmail.com', payment: 'Paid', image: 'https://via.placeholder.com/30' },
  { name: 'Tom Brown', email: 'tombrown321@gmail.com', payment: 'Unpaid', image: 'https://via.placeholder.com/30' },
  { name: 'Linda Taylor', email: 'lindataylor921@gmail.com', payment: 'Paid', image: 'https://via.placeholder.com/30' },
  { name: 'David Johnson', email: 'davidjohnson228@gmail.com', payment: 'Unpaid', image: 'https://via.placeholder.com/30' },
  { name: 'Emily Davis', email: 'emilydavis78@gmail.com', payment: 'Paid', image: 'https://via.placeholder.com/30' },
  { name: 'Chris Evans', email: 'chris.evans@gmail.com', payment: 'Unpaid', image: 'https://via.placeholder.com/30' },
];

const UserTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <div style={{ height: '250px', overflowY: 'scroll' }}>
        <table className="w-full table-auto">
          <thead className="bg-white sticky top-0"> {/* Fixed header */}
            <tr className="text-left">
              <th className="p-2 text-sm font-normal font-poppins ">
                <div className='flex items-center cursor-pointer' onClick={() => handleSort('name')}>
                  Name 
                  {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? <VscTriangleUp className='ml-2' /> : <VscTriangleDown className='ml-2' />)}
                </div>
              </th>
              <th className="p-2 text-sm font-normal font-poppins ">
                <div className='flex items-center cursor-pointer' onClick={() => handleSort('email')}>
                  Email 
                  {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? <VscTriangleUp className='ml-2' /> : <VscTriangleDown className='ml-2' />)}
                </div>
              </th>
              <th className="p-2 text-sm font-normal font-poppins ">
                <div className='flex items-center cursor-pointer' onClick={() => handleSort('payment')}>
                  Payment 
                  {sortConfig.key === 'payment' && (sortConfig.direction === 'asc' ? <VscTriangleUp className='ml-2' /> : <VscTriangleDown className='ml-2' />)}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.slice(0, 10).map((user, index) => (
              <tr key={index}>
                <td className="p-2 flex items-center">
                  <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                  {user.name}
                </td>
                <td className="p-2">{user.email}</td>
                <td className={`p-2 ${user.payment === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                  {user.payment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
