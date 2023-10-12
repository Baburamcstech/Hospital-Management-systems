const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection=require('../database');
const dotenv=require('dotenv')
const user = require("../model/registration.js");
const router = express.Router();
router.get('/',async(req,res)=>{
  const token=jwt.sign({name:"Baburam"},"secret");
  console.log(`${token} this is cookie`);
  res.cookie("M_cookie",token);
  res.send("Send cookie");
})
router.route('/').post(async(req, res) => {
  const email = req.body.email;
  const password = await bcrypt.hash(req.body.password,10);
  console.log(password)
  const loguser = 'SELECT email, password FROM patient WHERE email = ? AND password = ?';
  connection.query(loguser, [email, password], (queryError, results) => {
    if (queryError) 
    {
      console.error('Error executing query:', queryError);
      return;
    }
    console.log('Query results:', results);
    console.log(results)
    
    if (results.length === 1) {
      const token= jwt.sign({patient_email:loguser.email,isAdmin:loguser.isAdmin}, "secret");
      res.cookie("jwt",token);
      if(loguser.isAdmin)
      {
        res.json({status:"Admin_success",Result:loguser});
      } 
    else
      {
        res.json({status:"success",Result:loguser});
      }
  }
  else{
    console.log("Something error!!!")
  }
  });
  });
module.exports = router;
