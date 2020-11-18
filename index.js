const express = require("express");
const app = express();
var bodyParser = require('body-parser')
const jwt = require("jsonwebtoken");
const cookies = require("cookie-parser");
const cors = require('cors');

app.use(cors()); //BE aware! this options should be only use to server Bella.js server. please correct it to the url of bella server, after moving to DELL premise
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);



app.use(express.static("public"));

//mongodb+srv://Yousef:5DITEwKxJ0hWLJPH@cluster0.rpovv.mongodb.net/test

var secret = 'abcdefghujklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+';
module.exports = secret;
app.use(cookies());
const url = "mongodb+srv://nimer:N1N1N1N1@cluster0.tejcy.mongodb.net/server";
const mongoose = require("mongoose");
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const userRouter = require("./routing/users");
app.use("/api/users", userRouter);

const statusRouter = require("./routing/status");
app.use("/api/status", statusRouter);

const analyticsRouter = require("./routing/analytics");
app.use("/api/analytics", analyticsRouter);

const bellaRouting = require("./routing/bellaRouting");
app.use("/api/PostBellaData", bellaRouting);

const statistics = require("./routing/statistics");
app.use("/api/statistics", statistics);


const port = process.env.PORT || 4000; 

app.listen(port, () => {
  console.log("App is Listening to port:", port);
});