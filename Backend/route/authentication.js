const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  const loguser = await user.findOne({ email: req.body.email });
  if (loguser) {
    const isPassCorrect=await bcrypt.compare(req.body.password,loguser.password)
    if (isPassCorrect) {
        const token= jwt.sign({patientId:loguser._id,isAdmin:loguser.isAdmin}, "secret");
       res.cookie("jwt",token);
       if(loguser.isAdmin){
        res.json({status:"Admin_success",Result:loguser});
       }else{
        res.json({status:"success",Result:loguser});
       }
    
    }
  } else {
   return res.status(404).json("Invalid email or password!!");
  }
});
module.exports = router;
