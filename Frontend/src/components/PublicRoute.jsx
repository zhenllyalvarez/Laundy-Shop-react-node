import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner'; // Adjust the path as needed

const PublicRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      axios.get('http://localhost:8080/api/verify', { withCredentials: true })
        .then(res => {
          if (res.data.message === 'Success') {
            setAuth(true);
          } else {
            setAuth(false);
          }
          setLoading(false);
        })
        .catch(() => {
          setAuth(false);
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return !auth ? children : <Navigate to="/Dashboard" />;
};

export default PublicRoute;
