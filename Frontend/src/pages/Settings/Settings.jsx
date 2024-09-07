import SideNavbar from '../../components/SideNavbar'
import React from 'react'

const Settings = () => {
  return (
    <>
    <SideNavbar/>
      <div className="p-4 sm:ml-64">
        <div>
          <h1 className='text-gray-500 text-6xl font-bold mb-8'>Settings</h1>
          <div className='mt-8'>
            <p className='text-gray-600 mb-2'>If you want to logout your account click the button below.</p>
            <button className='text-white px-4 py-2 bg-red-600 hover:bg-red-700 rounded'>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings