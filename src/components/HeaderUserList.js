import React from 'react'
import { FaPlus } from "react-icons/fa6";
const HeaderUserList = () => {
  return (
    <div className='w-full lg:w-[100%] mt-3'>
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-semibold font-poppins'>Users List</h1>
            <button type='button' className='bg-[#F74821] text-white px-4 py-2 rounded-lg flex justify-center items-center '> <FaPlus className='mr-2'/>Add User</button>
        </div>

    </div>
  )
}

export default HeaderUserList