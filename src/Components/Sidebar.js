import React from 'react'
import logo from '../assets/logo.png'
import { AiFillAppstore } from "react-icons/ai";
import { RiWallet3Fill } from "react-icons/ri";
import { MdChat } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { TbPlayerPauseFilled } from "react-icons/tb";
import { PiToolboxLight } from "react-icons/pi";
import { BiSolidExit } from "react-icons/bi";

function SideBar() {
  return (
    <div>
        <div className='h-screen w-20 bg-black  rounded-full text-white flex flex-col justify-between items-center'>
            
            <div className='mt-8 h-1/6 '>
                
                    <img src={logo} alt="logo" className='h-10 w-10'/>

                
            </div>

            <div className='h-2/6 '>
                <div className=' flex flex-col gap-6'>
                    <AiFillAppstore size={25}/>
                    <RiWallet3Fill  size={25}/>
                    <MdChat size={25} />
                    <IoMail size={25}/>
                    <TbPlayerPauseFilled size={25}/>
                    <PiToolboxLight size={25}/>
                </div>

            </div>


            <div className='mb-8 h-3/6 flex flex-col justify-end'>
                <BiSolidExit size={30}/>
            </div>

        </div>
    </div>
  )
}

export default SideBar