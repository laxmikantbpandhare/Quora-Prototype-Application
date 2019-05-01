//import the require dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require("fs");
var glob = require("glob");

const multer = require("multer");
const path = require("path");

//use cors to allow cross origin resource sharing
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//Allow Access Control
require("./config/passport")(passport);

app.use(passport.initialize());

//Storing documents/Images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.post("/uploadprofile", upload.array("photos", 5), (req, res) => {
  if (req.session.user) {
    console.log("working on profiles");
    console.log("req.body", req.body);
    res.end();
  }
});

//import Routes
const login = require("./routes/login");
const signup = require("./routes/signup");
const profile = require("./routes/profile");
const question = require("./routes/question");
const answer = require("./routes/answer");
const topic = require("./routes/topic");
//use Routes
app.use("/login", login);
app.use("/signup", signup);
app.use("/topic", topic);
app.use("/profile", profile);
app.use("/question", question);
app.use("/answer", answer);
//start your server on posrt 3001
//app.settings.env = "production";
// console.log("env mode", app.settings.env);
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
