const express =require('express');
const bcrypt=require('bcrypt');
// const user=require('../model/registration.js');
const connection=require('../database');
const router=express.Router();
router.post('/',async(req,res)=>{
    console.log(req.cookies.jwt);
    console.log(req.body)
    req.body.password=await bcrypt.hash(req.body.password,10);
    const queryString =
  "INSERT INTO patient (username, phone, age, email, password) VALUES ('" +
  req.body.username +
  "','" +
  req.body.phone +
  "','" +
  req.body.age +
  "','" +
  req.body.email +
  "','" +
  req.body.password +
  "')";
  connection.query(queryString, (err,results) => {
    if (err) console.log(err);
    else  return res.json({status:"successfully registerd",Result:results});;
  });

})
module.exports=router;