// Dropdown.js
import React, { useRef, useEffect } from "react";
import Habit from "../images/Habit.svg";
import Delete from "../images/Delete.svg";
import Edit from "../images/Edit.svg";
import Disable from "../images/Disable.svg";
const Dropdown = ({ onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose(); // Close the dropdown if clicked outside
      }
    };

    // Add event listener for clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg z-10"
    >
      <ul className="py-4 space-y-1">
        <li className="px-4 py-0 hover:bg-gray-100 cursor-pointer">
          <div className="flex bg-[#FF7171] bg-opacity-10 rounded-md p-2">
            <img src={Habit} alt="Habit" className="w-4" />
            <span className="ml-4 text-sm">Habit Tracking</span>
          </div>
        </li>
        <li className="px-4 py-0 hover:bg-gray-100 cursor-pointer">
          <div className="flex bg-[#FF7171] bg-opacity-10 rounded-md p-2">
            <img src={Edit} alt="Habit" className="w-3" />
            <span className="ml-4 text-sm">Edit</span>
          </div>
        </li>
        <li className="px-4 py-0 hover:bg-gray-100 cursor-pointer">
          <div className="flex bg-[#FF7171] bg-opacity-10 rounded-md p-2">
            <img src={Delete} alt="Habit" className="w-3" />
            <span className="ml-4 text-sm">Delete</span>
          </div>
        </li>
        <li className="px-4 py-0 hover:bg-gray-100 cursor-pointer">
          <div className="flex bg-[#FF7171] bg-opacity-10 rounded-md p-2">
            <img src={Disable} alt="Habit" className="w-3" />
            <span className="ml-4 text-sm">Disable</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
