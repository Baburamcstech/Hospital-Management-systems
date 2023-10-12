const express = require("express");
const Patient = require("../model/appointmented.js");
const router = express.Router();
  var connection=require('../database');
const mongoose = require('mongoose'); // Assuming you're using Express

router.get("/", async (req, res) => {
  try {
    // insert into patient value("Shimon",22,"Jharkhand");
    let sql="select * from patient";
    connection.query(sql,function(err,results){
        if(err)throw err;
        else{
            console.log(results);
        }
    })
    const patient = await Patient.find({}).sort({time_slot: -1}).exec();

    return res.json({ status: "success", Result:patient });
  } 
  catch (err)  {
        
     return res.status(500).json({ status: "error", error: err.message });
    }
});

module.exports = router; // Export the router