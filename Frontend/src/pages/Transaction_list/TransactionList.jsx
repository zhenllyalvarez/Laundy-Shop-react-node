import SideNavbar from '../../components/SideNavbar';
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { Pagination } from 'antd';

const TransactionList = () => {

  const [transaction, setTransaction] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const tableContainer = useRef(null);

  const formatDate = (dateString) => {
    const date   = new Date(dateString);
    const option = {month: 'long', day: 'numeric', year: 'numeric'};
    return date.toLocaleDateString('en-US', option);
  }

  useEffect(() => {
    axios.get('http://localhost:8080/api/transaction/list')
    .then(res => {
      setTransaction(res.data);
      setFilteredTransactions(res.data)
    })
    .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    let updatedTransactions = transaction;

    if (filter !== 'all') {
      updatedTransactions = updatedTransactions.filter((data) => 
        filter === 'completed' ? data.status === 1 : data.status === 0
      );
    }

    if(search) {
      updatedTransactions = updatedTransactions.filter((data) => 
        data.name.toLowerCase().includes(search.toLowerCase()) || 
        data.number.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredTransactions(updatedTransactions);
    setCurrentPage(1); // Reset to first page when filter or search changes
  }, [filter, search, transaction]);

  const paginatedData = filteredTransactions.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const getStatus = (status) => {
    return status === 1 ? 'Completed' : 'Ongoing';
  }
  
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
    <SideNavbar/>
      <div className="p-4 sm:ml-64">
        <div>
          <h1 className='text-gray-500 text-4xl font-bold'>Customer Transaction</h1>
          <p className='mb-8 text-gray-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam impedit, quisquam exercitationem, laboriosam quis, nobis optio sint <br /> temporibus amet mollitia sequi commodi suscipit reiciendis deserunt error voluptate. Explicabo, nobis.</p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8" ref={tableContainer}>
            <div className='flex gap-2'>
              <input className='w-60 outline-0 bg-gray-100 px-4 h-12 mb-2 text-gray-500 rounded shadow' type="search" name="search" id="" placeholder='Search here...'
                value={search}
                onChange={handleSearchChange}/>
              <select className='w-60 outline-0 bg-gray-100 px-4 h-12 mb-2 text-gray-500 rounded shadow'
                value={filter}
                onChange={handleFilterChange}>
                <option value="all">All Transactions</option>
                <option value="completed">Completed</option>
                <option value="ongoing">Ongoing</option>
              </select>
            </div>
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
                      paginatedData.map((data, i) => {
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
                              <p className={data.status === 1 ? 'text-green-500' : 'text-orange-500'}>
                                {getStatus(data.status)}
                              </p>
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
              </table>
              <Pagination className='p-2'
                current={currentPage}
                pageSize={pageSize}
                total={filteredTransactions.length}
                onChange={handlePageChange}
              />
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionList