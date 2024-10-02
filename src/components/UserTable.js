// src/components/UserTable.js
import React from 'react';

const users = [
  { name: 'John Deo', email: 'johndoe2211@gmail.com', phone: '+33757005467', payment: 'Paid' },
  { name: 'Shelby Goode', email: 'shelbygoode481@gmail.com', phone: '+33757005467', payment: 'Unpaid' },
  { name: 'Robert Bacins', email: 'robertbacins4182@gmail.com', phone: '+33757005467', payment: 'Paid' },
  { name: 'John Carilo', email: 'johncarilo182@gmail.com', phone: '+3375705467', payment: 'Paid' },
  { name: 'Adriene Watson', email: 'adrienewatson82@gmail.com', phone: '+3375705467', payment: 'Unpaid' },
];

const UserTable = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-6">
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone Number</th>
            <th className="p-2">Payment</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.phone}</td>
              <td className={`p-2 ${user.payment === 'Paid' ? 'text-green-500' : 'text-red-500'}`}>
                {user.payment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
