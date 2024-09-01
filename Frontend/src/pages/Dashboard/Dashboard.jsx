import React from 'react'

const Dashboard = () => {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div>
          <h1 className="text-gray-500 text-4xl font-bold">Dashboard</h1>
          <div className="card flex gap-4 mt-4">
            <span
              className="block flex max-w-sm w-1/2 h-32 p-4 items-center bg-white border border-gray-200 rounded-lg shadow bg-blue-200"
            >
              <h5 className="flex items-center mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <svg className="w-14 h-12 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
              </svg>
              <div className='text-3xl'>
              Transaction
                <p className="font-normal text-lg text-gray-700">
                500
              </p>
              </div>
              </h5>
            </span>

            <span
              className="block flex max-w-sm w-1/2 h-32 p-4 items-center bg-white border border-gray-200 rounded-lg shadow bg-green-200"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center">
              <svg className="w-14 h-14 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17.345a4.76 4.76 0 0 0 2.558 1.618c2.274.589 4.512-.446 4.999-2.31.487-1.866-1.273-3.9-3.546-4.49-2.273-.59-4.034-2.623-3.547-4.488.486-1.865 2.724-2.899 4.998-2.31.982.236 1.87.793 2.538 1.592m-3.879 12.171V21m0-18v2.2"/>
              </svg>

              <div className='text-3xl'>
              Daily Income
                <p className="font-normal text-gray-700 text-lg">
                500
              </p>
              </div>
              </h5>
            </span>
            <span
              className="block flex max-w-sm w-1/2 h-32 p-4 items-center bg-white border border-gray-200 rounded-lg shadow bg-pink-200"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 flex items-center">
              <svg className="w-14 h-14 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M9 15a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm3.845-1.855a2.4 2.4 0 0 1 1.2-1.226 1 1 0 0 1 1.992-.026c.426.15.809.408 1.111.749a1 1 0 1 1-1.496 1.327.682.682 0 0 0-.36-.213.997.997 0 0 1-.113-.032.4.4 0 0 0-.394.074.93.93 0 0 0 .455.254 2.914 2.914 0 0 1 1.504.9c.373.433.669 1.092.464 1.823a.996.996 0 0 1-.046.129c-.226.519-.627.94-1.132 1.192a1 1 0 0 1-1.956.093 2.68 2.68 0 0 1-1.227-.798 1 1 0 1 1 1.506-1.315.682.682 0 0 0 .363.216c.038.009.075.02.111.032a.4.4 0 0 0 .395-.074.93.93 0 0 0-.455-.254 2.91 2.91 0 0 1-1.503-.9c-.375-.433-.666-1.089-.466-1.817a.994.994 0 0 1 .047-.134Zm1.884.573.003.008c-.003-.005-.003-.008-.003-.008Zm.55 2.613s-.002-.002-.003-.007a.032.032 0 0 1 .003.007ZM4 14a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1Zm3-2a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1Zm6.5-8a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-.796l-2.341 2.049a1 1 0 0 1-1.24.06l-2.894-2.066L6.614 9.29a1 1 0 1 1-1.228-1.578l4.5-3.5a1 1 0 0 1 1.195-.025l2.856 2.04L15.34 5h-.84a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
              </svg>

                <div className='text-3xl'>
                Monthly Income
                <p className="font-normal text-gray-700 text-lg">
                500
              </p>
                </div>
              </h5>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard