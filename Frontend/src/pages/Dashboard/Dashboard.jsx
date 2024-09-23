import axios from "axios";
import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/SideNavbar";
import Carousel from "../../components/Dashboard/Carousel";

const Dashboard = () => {
  const [allCount, setAllCount] = useState("");
  const [onGoing, setOnGoing] = useState("");
  const [completed, setCompleted] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/transaction/list", {
        withCredentials: true,
      })
      .then((res) => {
        setAllCount(res.data.length);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/customer/transaction/list", {
        withCredentials: true,
      })
      .then((res) => {
        setOnGoing(res.data.length);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/completed/transaction/list", {
        withCredentials: true,
      })
      .then((res) => {
        setCompleted(res.data.length);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <SideNavbar />
      <div className="p-4 sm:ml-64">
        <div>
          <h1 className="text-gray-500 text-4xl font-bold">Dashboard</h1>
          <div className="card flex gap-4 mt-4">
            <span className="flex max-w-sm w-1/2 h-32 p-4 items-center border border-gray-200 rounded-lg shadow-lg bg-blue-300">
              <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight text-gray-900">
                <svg
                  className="w-14 h-12 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-2xl">
                  All Transaction
                  <p className="font-normal text-lg text-gray-700">
                    {allCount}
                  </p>
                </div>
              </h5>
            </span>

            <span className="flex max-w-sm w-1/2 h-32 p-4 items-center border border-gray-200 rounded-lg shadow-lg bg-green-300">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center">
                <svg
                  className="w-14 h-14 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                  />
                </svg>

                <div className="text-2xl">
                  Ongoing Transaction
                  <p className="font-normal text-gray-700 text-lg">{onGoing}</p>
                </div>
              </h5>
            </span>
            <span className="flex max-w-sm w-1/2 h-32 p-4 items-center border border-gray-200 rounded-lg shadow-lg bg-pink-300">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center">
                <svg
                  className="w-14 h-14 text-gray-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="text-2xl">
                  Completed Transaction
                  <p className="font-normal text-gray-700 text-lg">
                    {completed}
                  </p>
                </div>
              </h5>
            </span>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Dashboard;
