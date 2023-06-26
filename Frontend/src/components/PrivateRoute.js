import React from 'react'
import { Navigate } from 'react-router-dom';
const token = localStorage.getItem('jwtToken');
const PrivateRoute2 = ({children}) => {
    // const [jwt,setjwt]=uselocalState(["","jwt"]);
  return token ? children :Navigate="/login";
  
}
export default PrivateRoute2