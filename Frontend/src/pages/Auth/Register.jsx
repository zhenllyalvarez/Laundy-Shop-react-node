  import axios from 'axios';
  import React, { useState } from 'react'
  import { Link } from 'react-router-dom'
  import { useNavigate } from 'react-router-dom';

  export const Register = () => {
  const [ fullname , setFullname ] = useState('');
  const [ email , setEmail ] = useState('');
  const [ number , setNumber ] = useState('');
  const [ password , setPassword ] = useState('');
  const [ conpassword , setConpassword ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/register", {fullname, email, number, password, conpassword})
    .then(res => {
      alert(res.data.message);
      navigate('/');
      console.log(res);
    }) .catch (err => alert(err.response.data.message));
  }

  return (
    <>
      <div className="bg-white py-4 sm:py-8 lg:py-4">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <form onSubmit={handleSubmit} className="mx-auto max-w-lg rounded-lg border shadow-md bg-gray-50">
                  <div className='flex flex-col gap-4 p-4 md:p-8'>
                      <div>
                          <label htmlFor="fullname" className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>Fullname</label>
                          <input type="text" className='w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring' placeholder='fullname' required
                          fullname="fullname" onChange={e => setFullname(e.target.value)}/>
                      </div>
                      <div>
                          <label htmlFor="email" className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>Email</label>
                          <input type="email" className='w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring' placeholder='Example@gmail.com' required
                          email="email" onChange={e => setEmail(e.target.value)}/>
                      </div>
                      <div>
                          <label htmlFor="number" className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>Number</label>
                          <input type="number" className='w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring' placeholder='09123456789' required
                          number="number" onChange={e => setNumber(e.target.value)}/>
                      </div>
                      <div>
                          <label htmlFor="password" className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>Password</label>
                          <input type="password" className='w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring' placeholder='*******' required
                          password="password" onChange={e => setPassword(e.target.value)}/>
                      </div>
                      <div>
                          <label htmlFor="conpassword" className='mb-2 inline-block text-sm text-gray-800 sm:text-base'>Confirm password</label>
                          <input type="password" className='w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring' placeholder='*******' required
                          conpassword="conpassword" onChange={e => setConpassword(e.target.value)}/>
                      </div>

                      <p className='text-gray-500'>You already have an account? login <Link to={'/'} className='text-blue-500 underline cursor-pointer'>here</Link></p>

                      <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Register</button>
                  </div>
              </form>
          </div>
      </div>
    </>
  )
}

export default Register;