import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination/PaginationBtn';
import axios from 'axios';

const TransactionList = () => {

  const [ transaction, setTransaction] = useState([]);

  const formatDate = (dateString) => {
    const date   = new Date(dateString);
    const option = {month: 'long', day: 'numeric', year: 'numeric'};
    return date.toLocaleDateString('en-US', option);
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/transaction/list')
    .then(res => {
      setTransaction(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div>
          <h1 className='text-gray-500 text-4xl font-bold'>Customer Transaction</h1>
          <p className='mb-8 text-gray-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam impedit, quisquam exercitationem, laboriosam quis, nobis optio sint <br /> temporibus amet mollitia sequi commodi suscipit reiciendis deserunt error voluptate. Explicabo, nobis.</p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <input className='w-60 outline-0 bg-gray-100 px-4 h-12 mb-2 text-gray-500 rounded shadow' type="search" name="search" id="" placeholder='Search here...'/>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                      <tr>
                          <th scope="col" className="px-6 py-3">
                              Name
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Number
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Type
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Kilo
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Price
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Transaction Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                              Receive Date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Status
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      transaction.map((data, i) => {
                        return (
                          <tr key={i} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {data.name}
                            </td>
                            <td className="px-6 py-4">
                                {data.number}
                            </td>
                            <td className="px-6 py-4">
                                {data.type}
                            </td>
                            <td className="px-6 py-4">
                                {data.kilo}
                            </td>
                            <td className="px-6 py-4">
                                {data.price}
                            </td>
                            <td className="px-6 py-4">
                                {formatDate(data.transaction_date)}
                            </td>
                            <td className="px-6 py-4">
                                {formatDate(data.date_received)}
                            </td>
                            <td className="flex gap-2 px-6 py-4">
                              <p className='text-green-500'>Completed</p>
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
              </table>
              <Pagination/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionList