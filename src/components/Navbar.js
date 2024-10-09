import React, { useState } from "react"; // Import useState for managing state
import login2 from "../images/login2.svg";
import Category from "../images/Category.svg";
import profile from "../images/profile.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import hamburger and close icons
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage navbar visibility

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the navbar visibility
  };

  return (
    <div className="md:w-[18%] w-full md:h-screen md:sticky top-0 bg-white flex justify-between items-start md:flex-col  z-20">
      {/* Logo section */}
      <div className="p-4 flex justify-between items-center">
        <div className="hidden md:block">
          <img src={login2} alt="Logo" className="w-[60%] mx-auto" />
        </div>
        {/* Hamburger button for mobile view */}
        <button onClick={toggleNavbar} className="md:hidden p-2">
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Scrollable navigation */}
      <div className={`flex-1 overflow-y-auto p-6 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <nav>
          <ul className="space-y-4">
            <Link to="/" 
            
            >
              <button type="button" className="flex items-center">
          
                <img src={Category} className="p-2 rounded" alt="Dashboard Icon" />
              
              Dashboard
           </button>
            </Link>
            <Link to="/users"
            
            >
            
              <button type="button" className="flex items-center">
                <img src={profile} className="p-2 rounded" alt="Users Icon" />
                Users List
              </button>
              <span></span>
            
            </Link>
            
          </ul>
        </nav>
      </div>

      {/* Profile at the bottom */}
      <div className="p-6 flex items-center space-x-2">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Easin Arafat"
          className="rounded-xl w-12 h-12"
        />
        <div className="hidden md:block">
          <p className="text-gray-600 text-sm font-semibold font-poppins">Easin Arafat</p>
          <p className="text-gray-400 text-xs font-normal font-poppins">Free Account</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
