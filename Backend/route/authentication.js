const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require('../database');
const dotenv = require('dotenv');
const user = require("../model/registration.js");
const router = express.Router();

// router.get('/', async (req, res) => {
//   const token = jwt.sign({ name: "Baburam" }, "secret");
//   console.log(`${token} this is cookie`);
//   res.cookie("M_cookie", token);
//   res.send("Send cookie");
// });

router.post('/', async (req, res) => {
  const email = req.body.email;
  const loguser = 'SELECT email,isAdmin, password FROM patient WHERE email = ?';

  connection.query(loguser, [email], (queryError, results) => {
    if (queryError) {
      console.error('Error executing query:', queryError);
      return;
    }

    if (results.length === 1) {
      bcrypt.compare(req.body.password, results[0].password, (err, result) => {
        if (err) {
          console.error('Error:', err);
        } else if (result === true) {
          const token = jwt.sign({
            email: results[0].email,
            isAdmin: results[0].isAdmin
          }, "secret");
          res.cookie("mycookies", token);
          if (results[0].isAdmin==="true") 
          {
           return res.json({ status: "Admin_success", Result: results });
          } 
          else {
           return res.json({ status: "success", Result: results });
          }
        } else {
          console.log("Something went wrong!!!");
        }
      });
    }
  });
});

module.exports = router;

