const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

const app = new express();
const db = keys.mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected");
  })
  .catch(err => {
    console.log(err);
  });

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(PORT, console.log("Server Running"));
