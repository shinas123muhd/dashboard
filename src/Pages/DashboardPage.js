import React from 'react'
import SideBar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import TopCards from '../Components/TopCards'
import RightSideCards from '../Components/RightSideCards'

function DashboardPage() {
  return (
    <div className='h-screen py-5  flex bg-gray-100 font-abc'>
        <SideBar/>
        <div className='ml-4 w-full'>
          <Navbar/>
          <div className='mt-4 h-full w-full flex gap-6'>
            <div className='w-4/5 h-1/3'>
              <TopCards/>
            </div>
            <div className='w-1/5 h-full'>
              <RightSideCards/>
            </div>
            
          </div>
        </div>
        
        
    </div>
  )
}

export default DashboardPage