import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCustomerTransaction = () => {
  const [values, setValues] = useState({
    name: "",
    number: "",
    type: "",
    kilo: "",
    price: "",
    transaction_date: "",
    date_received: "",
  }); // Initialize an empty object to store the transaction data
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactionId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/update/transaction/${id}`,
          { withCredentials: true }
        );

        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          // Format the dates before setting the state
          const formattedTransactionDate = new Date(data.transaction_date)
            .toISOString()
            .split("T")[0]; // yyyy-MM-dd
          const formattedReceivedDate = new Date(data.date_received)
            .toISOString()
            .split("T")[0]; // yyyy-MM-dd

          setValues({
            ...data,
            transaction_date: formattedTransactionDate,
            date_received: formattedReceivedDate,
          });
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (id) {
      fetchTransactionId();
    }
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/update/transaction/${id}`,
        values, // Sending the updated values
        { withCredentials: true }
      );
      console.log("Transaction updated:", response.data);
      navigate("/CustomerTransaction");
    } catch (err) {
      console.log("Something's not right", err);
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <SideNavbar />
      <div className="p-16 sm:ml-64">
        <form
          onSubmit={handleUpdate}
          className="max-w-lg mx-auto border rounded shadow shadow-gray-300 p-8"
        >
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
              value={values.name || ""}
              onChange={handleChange}
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="number"
              id="number"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={values.number || ""}
              onChange={handleChange}
              placeholder=" "
            />
            <label
              htmlFor="number"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Number
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="type"
              id="type"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={values.type || ""}
              onChange={handleChange}
              placeholder=" "
            />
            <label
              htmlFor="type"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Type
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="kilo"
              id="kilo"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={values.kilo || ""}
              onChange={handleChange}
              placeholder=" "
            />
            <label
              htmlFor="kilo"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Kilo
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="number"
              name="price"
              id="price"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={values.price || ""}
              onChange={handleChange}
              placeholder=" "
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Price
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="transactiondate"
                id="transactiondate"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={values.transaction_date || ""}
                onChange={handleChange}
                placeholder=" "
              />
              <label
                htmlFor="transactiondate"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Transaction date
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="date"
                name="receivedDate"
                id="receivedDate"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={values.date_received || ""}
                onChange={handleChange}
                placeholder=" "
              />
              <label
                htmlFor="receivedDate"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Received date
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center"
            >
              Update
            </button>
            <Link
              to="/CustomerTransaction"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-2.5 text-center"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCustomerTransaction;
