import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { RiSettingsFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { PiLineVerticalLight } from "react-icons/pi";
import dp from '../assets/dp.png'

function Navbar() {
  const [search,setSearch]=useState("")
  return (
    <div className='w-full p-4 bg-white rounded-full'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-2xl'>Overview</h1>

          </div>
          <div className='w-1/2 flex items-center justify-end gap-7'>
            <div className='w-2/6 bg-gray-100 p-2 rounded-full flex justify-start items-center text-sm'><IoIosSearch className='mr-1 text-lg'/>Search</div>
            <RiSettingsFill size={25}/>
            <IoIosNotifications size={25}/>
            <PiLineVerticalLight size={25} />
            <div className='flex'>
              <div className='bg-blue-200 rounded-full p-1'><img src={dp} alt="Logo" className='w-7 h-7'/></div>
              <div className='ml-2'>
                <h1 className='text-xs text-gray-500'>@williamB111</h1>
                <h1 className='text-sm'>William Blake</h1>
              </div>
            </div>
            
          </div>
          
          
          
        </div>
    </div>
  )
}

export default Navbar