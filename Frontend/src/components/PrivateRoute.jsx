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
    return <div>Loading...</div>;  // Optionally show a loading spinner while checking authentication
  }

  return auth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
