const express =require('express');
const bcrypt=require('bcrypt');
const user=require('../model/registration.js');
const router=express.Router();
router.post('/',async(req,res)=>{
    console.log(req.cookies.jwt);
    console.log(req.body)
    req.body.password=await bcrypt.hash(req.body.password,10)
    const registered=new user(req.body);
   const user_n=await registered.save();
   return res.json({status:"successfully registerd",Result:user_n});
})
module.exports=router;