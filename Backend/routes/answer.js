var express = require("express");
var router = express.Router();
var passport = require("passport");
var requireAuth = passport.authenticate("jwt", { session: false });
const mongoose = require("mongoose");
var Answer = require("../../Kafka-Backend/Models/answer");

router.get("/", (req, res) => {
  const errors = {};
  console.log(req.query);
//  const answersFields = {};

  //answersFields.answer = "abc";
  //answersFields._id = "5cbfb135f2a460f63f4fee8c";
  //answersFields.isAnnonymous = "true";

  console.log("fields ans", answersFields);
  //(req.query.answer)
  //{ _id: "5cbfaae81aae68f35807012a" }
  Answer.find(answersFields)

    .then(answers => {
      if (!answers) {
        errors.noprofile = "There is no answers present for this search";
        res.status(404).json(errors);
      } else {
        console.log("answers", answers);
        res.json(answers);
      }
    })
    .catch(err => res.status(404).json(err));
});

router.post("/", requireAuth, function(req, res) {
  console.log("Inside answer Post Request");
  //if (req.session.user) {
  console.log("Inside answer Post Request");
  console.log("Req Body : ", req.body);

  

  console.log(req.body.question);

  var user = new Answer({
    _id: new mongoose.Types.ObjectId(),
    answer: req.body.answer,
    answerOwner: req.user.id,
    question: req.body.question,  
    isAnnonymous: req.body.isAnnonymous,
    answerDate: Date.now()
  });


  user.save().then(
    doc => {
      console.log("Answer saved successfully.", doc);
      res.value = "Answer saved successfully.";
      res.end(JSON.stringify(res.value));
    },
    err => {
      console.log("Unable to save Answer details.", err);
      res.value = "Unable to save Answer details.";
      res.end(JSON.stringify(res.value));
    }
  );
});

module.exports = router;
