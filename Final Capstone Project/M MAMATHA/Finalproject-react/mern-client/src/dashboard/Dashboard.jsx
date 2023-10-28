

//import { Sidebar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './Sidebar'



const Dashboard = () => {
  return (
    <div className='flex gap4 flex-col md:flex-row'>
        <SideBar />
        <Outlet/>
    </div>
  )
}

export default Dashboard