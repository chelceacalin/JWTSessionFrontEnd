import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../service/AuthenticationService';
import { useContext } from 'react';
import { LoginContext } from '../../utils/LoginContext';
function Home() {
  const {isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();
  const [storedUser, setStoredUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
  const [token] = useState(localStorage.getItem('token') || '');

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-500 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome Home, {storedUser.firstName} {storedUser.lastName}</h1>
      <div className="p-4 border rounded-lg bg-purple-800">
        <p className="text-lg">Email: {storedUser.email}</p>
        <p className="text-lg">Role: {storedUser.role}</p>
      </div>
      <div className="mt-4 p-4 border rounded-lg bg-purple-800">
        <p className="text-lg">Token: {token}</p>
      </div>

      <button
        className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
        onClick={() => {
          navigate('/sensitive');
        }}
      >
        Go to Admin Page
      </button>


      <button
        className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
        onClick={async () => {
          const res = await logout(token);
          console.log(res);
          setIsLoggedIn(false);
          console.log(isLoggedIn);
          //navigate('/');
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
