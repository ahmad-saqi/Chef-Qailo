import React, { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import UserGraph from "../components/UserGraph";
import { HiDotsVertical } from "react-icons/hi";
import Dropdown from "./Dropdown"; // Import your Dropdown component
import users from '../users/users.json'



const UserTable = () => {
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "asc",
  });
  const [dropdownIndex, setDropdownIndex] = useState(null); // To track which dropdown to show

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index); // Toggle dropdown
  };

  return (
    <div className="mt-6 flex flex-col lg:flex-row lg:space-x-8">
      <div className="w-full lg:w-[75%] bg-white p-6 rounded-xl shadow">
        <div style={{ height: "240px" }} className="overflow-y-scroll scrollbar-hide">
          <table className="w-full table-auto p-6">
            <thead className="bg-white sticky top-0 py-6 w-full border-b-2 z-10">
              <tr className="text-center w-[100%] flex">
                <th className="p-2 text-xs lg:text-sm font-normal font-poppins w-[60%] md:w-[35%]">
                  <div className="flex items-center cursor-pointer justify-start" onClick={() => handleSort("name")}>
                    Name
                    {sortConfig.key === "name" &&
                      (sortConfig.direction === "asc" ? (
                        <VscTriangleUp className="ml-2" />
                      ) : (
                        <VscTriangleDown className="ml-2" />
                      ))}
                  </div>
                </th>
                <th className="hidden md:flex p-2 text-xs lg:text-sm font-normal font-poppins w-[40%]">
                  <div className="flex items-center cursor-pointer justify-start" onClick={() => handleSort("email")}>
                    Email
                    {sortConfig.key === "email" &&
                      (sortConfig.direction === "asc" ? (
                        <VscTriangleUp className="ml-2" />
                      ) : (
                        <VscTriangleDown className="ml-2" />
                      ))}
                  </div>
                </th>
                <th className="p-2 text-xs lg:text-sm font-normal font-poppins w-[15%]">
                  <div className="flex items-center cursor-pointer justify-center" onClick={() => handleSort("payment")}>
                    Payment
                    {sortConfig.key === "payment" &&
                      (sortConfig.direction === "asc" ? (
                        <VscTriangleUp className="ml-2" />
                      ) : (
                        <VscTriangleDown className="ml-2" />
                      ))}
                  </div>
                </th>
                <th className="w-[10%]">
                  <p></p>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsers.slice(0, 10).map((user, index) => (
                <tr key={index} className="w-[100%] flex items-center">
                  <td className="p-2 flex items-center text-xs lg:text-sm font-poppins font-normal w-[60%] md:w-[35%]">
                    <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                    {user.name}
                  </td>
                  <td className="hidden md:flex p-2 text-xs lg:text-sm font-poppins font-normal text-gray-500 w-[40%]">
                    {user.email}
                  </td>
                  <td
                    className={`py-1 px-2 text-xs lg:px-5 lg:text-sm bg-[#F74821] bg-opacity-10 rounded-full flex justify-center w-[15%] ${
                      user.payment === "Paid" ? "text-[#F74821]" : "text-[#F74821]"
                    }`}
                  >
                    {user.payment}
                  </td>
                  <td className="w-[10%] pl-2 lg:pl-10 relative">
                    <HiDotsVertical onClick={() => toggleDropdown(index)} className="cursor-pointer" />
                    {dropdownIndex === index && <Dropdown onClose={() => setDropdownIndex(null)} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full lg:w-[25%] mt-4 lg:mt-0">
        <UserGraph />
      </div>
    </div>
  );
};

export default UserTable;
