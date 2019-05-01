//Signup.js - Signup route module
var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt-nodejs");
//var mongo = require('mongodb');
var mongooseTypes = require("mongoose").Types;
const mongoose = require("mongoose");
var Model = require("../../Kafka-Backend/Models/userDetails");
var mysql = require("mysql");
var faker = require("faker");
var connection = require("../../Kafka-Backend/connection");

//Kafka
//var kafka = require('../kafka/client');

//Route to handle Post Request Call
router.post("/", function(req, res) {
  console.log("Inside Login signup post Request");
  console.log("Req Body : ", req.body);

  // kafka.make_request('signup', req.body, function(err, result){

  //     console.log('In results Signup');
  //     console.log('Results: ', result);

  //     if(result){
  //         console.log("User saved successfully.");
  //         res.writeHead(200, {
  //             'Content-type': 'text/plain'
  //         });
  //         res.end('Adding a user successful!');
  //     }
  //     else if(result == null){
  //         console.log("User already exists.");
  //         res.writeHead(210, {
  //             'Content-type': 'text/plain'
  //         });
  //         res.end('Dupplicate user!');
  //     }

  //     if(err){
  //         console.log("Unable to fetch user details. Error in Signup.", err);
  //         res.writeHead(400, {
  //             'Content-type': 'text/plain'
  //         });
  //         res.end('Error in fetching user details!');
  //     }
  // });

  // this process will avoid SQL injection attack
  for (var i = 0; i < 4999; i++) {
    console.log("Entere insdie for loop", i);
    let fakeEmail = faker.internet.email();

    let sql = "SELECT emailid FROM userDetails WHERE emailid = ?";
    connection.query(sql, fakeEmail, function(error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        console.log("Entered inside else loop", i);
        const hashedPassword = bcrypt.hashSync(req.body.password);
        //hard coded values as FE is not developed well
        req.body.city = "abc";
        req.body.state = "xyz";
        req.body.zipcode = 123;
        req.body.profileimage = "a";

        //this will avoid SQL injection attack
        let sql = "INSERT INTO userDetails (emailid, password) VALUES  ? ";
        let inser_vals = [[fakeEmail, hashedPassword]];

        connection.query(sql, [inser_vals], function(error, results, fields) {
          if (error || results == null || results.length < 1) {
            console.log(error);
            // res.value = "The User details entered are not valid";
            console.log(res.value);
            // callback(null, res);
          } else {
            console.log("Going inside table", i);
            var user = new Model({
              _id: new mongoose.Types.ObjectId(),
              firstName: faker.name.firstName(),
              lastName: faker.name.lastName(),
              email: fakeEmail,
              city: req.body.city,
              state: req.body.state,
              zipCode: req.body.zipCode,
              profileImage: req.body.profileImage,
              status: req.body.status
            });

            user.save().then(
              doc => {
                // res.status(200).json(doc);
                console.log("User saved successfully.", doc);
                // callback(null, doc);
              },
              err => {
                console.log("Unable to save user details.", err);
                // res.status(404).json(err); //callback(err, null);
              }
            );
          }
        });
      }
    });
  }
  console.log("Done ..outside the for loop");
});

module.exports = router;
