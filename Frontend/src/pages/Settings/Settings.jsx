import axios from 'axios';
import SideNavbar from '../../components/SideNavbar'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [ auth, setAuth ] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    axios.get('http://localhost:8080/api/logout')
    .then(res => {
      navigate('/');
      console.log(res.data.status);
      location.reload(true)
    }) 
    .catch(err => console.log(err));
  }

  return (
    <>
    <SideNavbar/>
    <div className="p-4 sm:ml-64">
        <div>
          <h1 className='text-gray-500 text-6xl font-bold mb-8'>Settings</h1>
          <div className='mt-8'>
            <p className='text-gray-600 mb-2'>If you want to logout your account click the button below.</p>
            <button className='text-white px-4 py-2 bg-red-600 hover:bg-red-700 rounded' onClick={handleLogout}>Logout</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Settings