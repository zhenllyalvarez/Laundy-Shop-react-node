import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/verify', { withCredentials: true })
      .then(res => {
        if (res.data.message === 'Success') {
          setAuth(true);
        } else {
          setAuth(false);
        }
      })
      .catch(() => {
        setAuth(false);
      });
  }, []);

  if (auth === null) {
       return <div
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
  </div>;
  }

  if (auth) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
