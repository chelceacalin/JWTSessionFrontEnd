import React, { useContext,useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';


function AdminOnlyRoute() {
        const user=JSON.parse(localStorage.getItem('user'));
        console.log(user);

        if(user){
            if (user.role=="ADMIN") {
                return <Outlet />;
              } 
              else {
                return <Navigate to="/home" />;
              }
        }

   else {
       return <Navigate to="/home" />;
     }
}

export default AdminOnlyRoute