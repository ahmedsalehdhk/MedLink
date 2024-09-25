import React from 'react'
import { Link } from 'react-router-dom'

// components
import PrimaryButton from '../components/PrimaryButton'


const Dashboard = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className="navbar order-2 md:order-1 w-full md:w-1/5 h-[8vh] md:h-screen border-r flex flex-col justify-between items-center py-12 px-10">
        <h1 className="logo font-bold text-3xl hover:cursor-pointer">MedLink⚕️</h1>
        <ul className="nav-links text-xl font-medium flex flex-col gap-5">
          <ul className='hover:cursor-pointer'>Dashboard</ul>
          <ul className='hover:cursor-pointer'>Collection</ul>
          <ul className='hover:cursor-pointer'>Settings</ul>
        </ul>
        <div className="user font-medium flex flex-col gap-1 justify-center items-center">
          <div className="user-image h-20 w-20 rounded-full bg-black"></div>
          <div className="user-image"></div>
          <h1>Melissa</h1>
          <Link to='/'>Logout</Link>
        </div>
      </div>
      <div className="content order-1 md:order-2 w-full md:w-4/5 h-[92vh] md:h-screen py-12 px-10">Content</div>
    </div>
  )
}

export default Dashboard
