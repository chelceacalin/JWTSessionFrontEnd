import {Outlet,Navigate} from 'react-router-dom'
import axios from 'axios'
import React, { useEffect,useState } from 'react'

function PrivateRoute() {

let [isValid,setIsValid]=useState(0)
useEffect(() => {
    const url = 'http://localhost:8080/api/v1/auth/istokenvalid/';
    const token = localStorage.getItem('token');

    if (token) {

      try {
        axios
          .get(url + token)
          .then((res) => {
             // console.log(res)
              if(res.data===true)
                 setIsValid(prev=>1)
                 console.log(isValid)
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    } 
  }, [isValid]);


  if(isValid){
    return <Outlet/>
  }
  else{
    <Navigate to='/'/>
  }
}

export default PrivateRoute