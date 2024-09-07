import SideNavbar from '../../components/SideNavbar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CustomerTransaction = () => {
  const [transaction, setTransaction] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [search, setSearch] = useState('');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {month: 'long', day: 'numeric', year: 'numeric'};
    return date.toLocaleDateString('en-US', options);
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/customer/transaction/list?status=0')
    .then(res => {
      setTransaction(res.data);
      setFilteredTransactions(res.data);
    })
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    let updatedTransactions = transaction;

    if (search) {
      updatedTransactions = updatedTransactions.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase()) ||
        data.number.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredTransactions(updatedTransactions); // Update filtered list
  }, [search, transaction]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  
  const hanldeBtn = (id) => {
      axios.put(`http://localhost:8080/api/transaction/update/${id}`, {status: 1})
      .then(res => {
        setTransaction(transaction.filter(item => item.id !== id));
        console.log(res.data);
      })
      .catch(err => console.log(err));
    };
  

  return (
    <>
    <SideNavbar/>
      <div className="p-4 sm:ml-64">
        <div>
          <h1 className='text-gray-500 text-4xl font-bold'>Customer Transaction</h1>
          <p className='mb-14  text-gray-500 font-light'>You can add a new transaction here, and once it's submitted, you'll be able to see it displayed in the table below, where all transactions are listed.</p>
          <div className='flex justify-between'>
          <Link to='/AddCustomerTransaction' className='bg-blue-500 hover:bg-blue-600 px-5 py-4 w-30 text-sm font-semibold rounded text-white shadow'>Add Transaction</Link>
          <input className='w-60 outline-0 bg-gray-100 px-4 h-12 text-gray-500 rounded shadow' type="search" name="search" id="" placeholder='Search here...'
            value={search}
            onChange={handleSearchChange}
          />
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
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
                            Option
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                      filteredTransactions.map((data, i) => {
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
                                <button onClick={() => hanldeBtn(data.id)} className='bg-green-500 hover:bg-green-600 text-white py-2 px-2.5 rounded'>Complete</button>
                                <Link to='/UpdateCustomerTransaction' className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded'>Update</Link>
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerTransaction;
