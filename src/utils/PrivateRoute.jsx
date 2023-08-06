import { Outlet, Navigate } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from './LoginContext';
import axios from 'axios';

function PrivateRoute() {
  const { isLoggedIn } = useContext(LoginContext);
  const [isTokenValid, setTokenValid] = useState(false); // Initialize with false

  const url = 'http://localhost:8080/api/v1/auth/istokenvalid/';
  let token = localStorage.getItem('token');

  useEffect(() => {
    // Call only if the user is logged in and token exists
      axios.get(url + token)
        .then((data) => {
          console.log("Data: ", data.data);
          setTokenValid(data.data); // Update the state with the value from data.data
        })
        .catch(error => {
          console.log("Error: ", error);
          setTokenValid(false); // Set as false on error
        });
  }, [isLoggedIn, token]); // Dependency array

  if (isLoggedIn ) { // Check both isLoggedIn and isTokenValid
    return <Outlet/>;
  } else {
    return <Navigate to="/" />;
  }
}

export default PrivateRoute;
