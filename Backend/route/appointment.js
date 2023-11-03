const express = require("express");
const Patient = require("../model/appointmented.js");
const list=require("../model/registration.js")
const func2=require('../utils/verifyToken.js')
const connection=require('../database');
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = 'SELECT * FROM BookedAppointment';
    connection.query(data, (queryError, results) => {
    if (queryError) {
      console.error('Error executing query:', queryError);
      return;
    }
    console.log('Query results:', results);
    return res.json({ status: "success", Result: results });
  });
  } 
  catch (err) {
    console.log(err);
  }
});

//get by id
router.get("/id",func2.verifyToken, async (req, res) => {
  try {
     const email = req.decodedData.email;
     const query = 'SELECT * FROM BookedAppointment WHERE email = ?';
     connection.query(query, [email], (queryError, results) => {
       if (queryError) {
         console.error('Error executing query:', queryError);
         return;
       }
       return res.json({ status: 'success', Result: results });
     });
  }
   catch (err) {
    console.log(err);
  }
});
router.post("/",func2.verifyToken, async (req, res) => {
  try {
     const email = req.decodedData.email;
    const {name,phone,address,doctor,problem,time_slot}=req.body;
    emailAlt=req.body.email;
    const queryString =
    "INSERT INTO BookedAppointment (email,name, phone,emailAlt,address,doctor, problem,time_slot) VALUES ('" +
    email +
    "','" +
    name +
    "','" +
    phone +
    "','" +
    emailAlt +
    "','" +
    address +
    "','" +
    doctor +
    "','" +
    problem +
    "','" +
    time_slot +
    "')";
    connection.query(queryString, (err) => {
      if (err) console.log(err);
      else console.log("Appointment booked!!!");
    });
   
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
