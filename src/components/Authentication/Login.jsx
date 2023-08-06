import React, { useState, useContext } from "react";
import "../css/Authentication/Login.css";
import { login } from "../../service/AuthenticationService.js";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../utils/LoginContext";


function Login() {
  const { setIsLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let handleLogin = (e) => {
    e.preventDefault();
    //console.log("Email " + email, "Password: " + password);
    if (email.length < 3 || password.length < 3) {
      alert("Please enter email and password");
    } else {
      let userObject = {
        email: email,
        password: password,
      };

      login(userObject)
        .then((res) => {
          if (res.status === 200) {
            //console.log(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("isLoggedIn", true);
            setIsLoggedIn(true); // Set the isLoggedIn value to true

            navigate("/home");
          } else {
            alert("Login Failed. Please check your email and password.");
          }
        })
        .catch((err) => {
          // Handle specific error cases
          if (err.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            alert("Login Failed. Please check your email and password.");
          } else if (err.request) {
            // The request was made but no response was received
            // `err.request` is an instance of XMLHttpRequest in the browser
            alert("Network Error. Please check your internet connection.");
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log(err);
            alert("An error occurred while logging in. Please try again later.");
          }
          console.log(err);
        });
    }
  };


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => [setEmail(e.target.value)]}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              autoComplete="current-username" 
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => [setPassword(e.target.value)]}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              autoComplete="current-password" 
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={(e) => {
                handleLogin(e);
              }}
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
