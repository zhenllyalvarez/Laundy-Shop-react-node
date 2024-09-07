import SideNavbar from '../../components/SideNavbar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddCustomerTransaction = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [type, setType] = useState('');
  const [kilo, setKilo] = useState('');
  const [price, setPrice] = useState('');
  const [transaction_date, setTransaction_date] = useState('');
  const [date_received, setDate_received] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
      axios.post('http://localhost:8080/api/add/transaction', {name, number, type, kilo, price, transaction_date, date_received})
      .then(res => {
        navigate("/CustomerTransaction");
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  return (
    <>
    <SideNavbar/>
      <div className="p-16 sm:ml-64">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto border rounded shadow shadow-gray-300 p-8">
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              onChange={e => setName(e.target.value)} placeholder=" " required />
              <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type="number" name="number" id="number" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={e => setNumber(e.target.value)} placeholder=" " required />
              <label htmlFor="number" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Number</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type="text" name="type" id="type" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={e => setType(e.target.value)} placeholder=" " required />
              <label htmlFor="type" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type='number' name="kilo" id="kilo" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={e => setKilo(e.target.value)} placeholder=" " required />
              <label htmlFor="kilo" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kilo</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
              <input type='number' name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={e => setPrice(e.target.value)} placeholder=" " required />
              <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
                <input type="date" name="transactiondate" id="transactiondate" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={e => setTransaction_date(e.target.value)} placeholder=" " required />
                <label htmlFor="transactiondate" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Transaction date</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="date" name="receivedDate" id="receivedDate" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={e => setDate_received(e.target.value)} placeholder=" " required />
                <label htmlFor="receivedDate" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Received date</label>
            </div>
          </div>
          <div className='flex gap-2'>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center">Add</button>
            <Link to='/CustomerTransaction' className='text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center'>Back</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddCustomerTransaction