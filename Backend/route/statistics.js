const express = require("express");
const Patient = require("../model/appointmented.js");
const router = express.Router();
const func2=require('../utils/verifyToken.js')
var connection = require("../database");

router.get("/", func2.verifyToken,async (req, res) => {
  try {
    const emailFromBody = req.decodedData;
    if(emailFromBody.isAdmin==="true"){
    let sql = "select DATE_FORMAT(time_slot, '%Y-%m-%d') as time_slot,count(*) as patient_num from BookedAppointment where date(time_slot)!=date(Now()) group by date(time_slot) order by time_slot desc";
    connection.query(sql, function (err, results) {

      if (err) throw err;
      else {
        return res.json({ status: "success", Result: results });
      }
    });
  }else{
    return res.json({ status: "fail", Result: results });
  }
  } catch (err) {
    return res.status(500).json({ status: "error", error: err.message });
  }
});

module.exports = router;
