import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative flex flex-col items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"
          role="status"
        >
        </div>
        <span className="text-gray-700">Page is loading, please wait...</span>
      </div>
    </div>
  );
};

export default Spinner;
