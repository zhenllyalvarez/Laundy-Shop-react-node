import React from 'react'

const BtnSpinner = () => {
    return (
        <div className="flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center">
            <div
              className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"
              role="status"
            >
            </div>
            <span className="absolute hidden text-gray-700">Page is loading, please wait...</span>
          </div>
        </div>
      );
}

export default BtnSpinner