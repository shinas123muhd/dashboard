import React from 'react'
import SideBar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

function DashboardPage() {
  return (
    <div className='h-screen p-5 flex'>
        <SideBar/>
        <div className='m-2'>
          <Navbar/>
        </div>
        
    </div>
  )
}

export default DashboardPage