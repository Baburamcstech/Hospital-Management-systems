import React, { useState, useEffect } from "react";
import { Link,useNavigate, useLocation } from 'react-router-dom';
import "./LoginStyle.css";
import axios from "axios";
const func = require("../functions/Buttons.js");

const Login = () => {
  // const history = useNavigate();
  // const location = useLocation();
  // const { from } = location.state || { from: { pathname: '/' } };
  const [userlogin, setuserlogin] = useState({
    email: "",
    password: "",
  });

    const handleSubmit2 = (e) => {
      e.preventDefault();
      try {
        axios.post("http://localhost:3002/login", { withCredentials: true,...userlogin })
          .then((res) => {
            if (res.data.status === "success") 
            {
             setuserlogin({
              email:'',
              password:''
             })
               window.location='/patient';
            } 
            else {
              if(res.data.status === "Admin_success"){
                setuserlogin({
                  email:'',
                  password:''
                 })
                 
                   window.location='/admin';
              }
              else{
              alert("Error!!");
            }
              setuserlogin({
                email:'',
                password:''
               })
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } 
      catch (err) {
        console.log("Error!!!");
      }
    };
  return (
    <div>
      <div className="background1">
        <div className="dis ">
          <form onSubmit={handleSubmit2}>
            <input
              className="user"
              placeholder="Username"
              name="username"
              onChange={(e) =>
                setuserlogin({ ...userlogin, email: e.target.value })
              }
            ></input>
            <br />

            <input type="password" className="user" placeholder="Password" name="password"
              onChange={(e) =>  setuserlogin({ ...userlogin, password: e.target.value }) } ></input>
            <div>
              <button
                type="submit"
                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                id="log"
                onClick={func.blinkButton("log")}
              >
                Login
              </button>
            </div>
            <p>
              If you have not account{" "}
              <Link to={"/register"}> Register here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
