const express = require("express");
const Patient = require("../model/patient.js");
const list=require("../model/registration.js")
const func2=require('../utils/verifyToken.js')
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const patient = await Patient.find();
    console.log(patient);
    return res.json({ status: "success", Result: patient });
  } catch (err) {
    console.log(err);
  }
});

//get by id
router.get("/id",func2.verifyToken, async (req, res) => {
  try {
    console.log(req.user.patientId);
    const patient = await Patient.find({Unique_id:req.user.patientId});
    console.log(patient);
    return res.json({ status:"success", Result: patient });
  } catch (err) {
    console.log(err);
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body.email)
     const user=await list.findOne({email:req.body.email})
    //console.log(user);
    const Unique_id=user._id;
    const {name,phone,email,address,doctor,problem,time_slot}=req.body;
    const patient = new Patient({Unique_id,name,phone,email,address,doctor,problem,time_slot});
     const result = await patient.save();
    console.log(user._id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
