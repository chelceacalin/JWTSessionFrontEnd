import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  // Wrap setIsLoggedIn to handle localStorage
  const setIsLoggedInWrapper = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem('isLoggedIn', value);
  }

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn: setIsLoggedInWrapper }}>
      {children}
    </LoginContext.Provider>
  );
};
