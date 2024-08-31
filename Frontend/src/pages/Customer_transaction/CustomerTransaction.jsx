import React, { useEffect, useState } from 'react';
import ModalCT from '../../components/CustomTranModal/ModalCT';
import Pagination from '../../components/Pagination/PaginationBtn';
import axios from 'axios';

const CustomerTransaction = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/transaction/list')
    .then(res => {
      setTransaction(res.data)
      console.log(res);
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div>
          <h1 className='text-gray-500 text-4xl font-bold'>Customer Transaction</h1>
          
          <div className="relative mt-14 overflow-x-auto shadow-md sm:rounded-lg">
              <ModalCT/>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-8">
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
                                {data.transaction_date}
                            </td>
                            <td className="px-6 py-4">
                                {data.date_received}
                            </td>
                            <td className="px-6 py-4">
                                <p className='text-orange-500'>On-going</p>
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

export default CustomerTransaction;
