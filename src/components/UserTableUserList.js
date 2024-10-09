import React, { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import UserGraph from "./UserGraph";
import { HiDotsHorizontal, HiDotsVertical } from "react-icons/hi";
import Dropdown from "./Dropdown"; // Import your Dropdown component

const users = [
  {
    name: "John Deo",
    email: "johndoe2211@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Shelby Goode",
    email: "shelbygoode481@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Robert Bacins",
    email: "robertbacins4182@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Jane Smith",
    email: "janesmith123@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Mark Johnson",
    email: "markjohnson82@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Emily Davis",
    email: "emilydavis78@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Michael Green",
    email: "michaelgreen51@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Chris Brown",
    email: "chrisbrown@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Sarah Miller",
    email: "sarahmiller82@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "David Wilson",
    email: "davidwilson@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Sophia Anderson",
    email: "sophia.anderson@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "James Martin",
    email: "james.martin@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Olivia Garcia",
    email: "olivia.garcia@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Henry Scott",
    email: "henry.scott@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Ethan Lewis",
    email: "ethan.lewis@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Liam Walker",
    email: "liam.walker@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Isabella Hall",
    email: "isabella.hall@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Noah Allen",
    email: "noah.allen@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Ava Young",
    email: "ava.young@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Jane Smith",
    email: "janesmith123@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Mark Johnson",
    email: "markjohnson82@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Emily Davis",
    email: "emilydavis78@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Michael Green",
    email: "michaelgreen51@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Chris Brown",
    email: "chrisbrown@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Sarah Miller",
    email: "sarahmiller82@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "David Wilson",
    email: "davidwilson@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Sophia Anderson",
    email: "sophia.anderson@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "James Martin",
    email: "james.martin@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Olivia Garcia",
    email: "olivia.garcia@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Henry Scott",
    email: "henry.scott@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Ethan Lewis",
    email: "ethan.lewis@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Liam Walker",
    email: "liam.walker@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Isabella Hall",
    email: "isabella.hall@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Noah Allen",
    email: "noah.allen@gmail.com",
    payment: "Unpaid",
    image: "https://via.placeholder.com/30",
  },
  {
    name: "Ava Young",
    email: "ava.young@gmail.com",
    payment: "Paid",
    image: "https://via.placeholder.com/30",
  }
];


const UserTableUserList = () => {
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
    <div className=" flex flex-col lg:flex-row mt-2">
      <div className="w-full lg:w-[75%]  ">
        <div style={{ height: "80vh" }}  className="overflow-y-scroll scrollbar-hide">
          <table className="w-full table-auto p-6">
            <thead className="bg-gray-100 sticky top-[-2px] py-6 w-full z-10   ">
              <tr className="text-center w-[100%] border-b-2  flex py-4">
                <th className="p-2 text-xs lg:text-sm font-normal font-poppins w-[35%]">
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
                <th className="p-2 text-xs lg:text-sm font-normal font-poppins w-[40%]">
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
            <tbody className="w-full bg-gray-100  ">
              {sortedUsers.slice(0, 30).map((user, index) => (
                <tr key={index} className=" bg-white mb-2 rounded-lg flex items-center border-2">
                  <td className="p-2 flex items-center text-xs lg:text-sm font-poppins font-normal w-[35%]">
                    <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                    {user.name}
                  </td>
                  <td className="p-2 text-xs lg:text-sm font-poppins font-normal text-gray-500 w-[40%]">
                    {user.email}
                  </td>
                  <td
                    className={`py-1 px-2 text-xs lg:px-5 lg:text-sm bg-[#F74821] bg-opacity-10 rounded-full flex justify-center items-center w-[15%] ${
                      user.payment === "Paid" ? "text-[#F74821]" : "text-[#F74821]"
                    }`}
                  >
                    {user.payment}
                  </td>
                  <td className="w-[10%] pl-2 lg:pl-10 relative">
                    <HiDotsHorizontal  onClick={() => toggleDropdown(index)} className="cursor-pointer" />
                    {dropdownIndex === index && <Dropdown onClose={() => setDropdownIndex(null)} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
    </div>
  );
};

export default UserTableUserList;
