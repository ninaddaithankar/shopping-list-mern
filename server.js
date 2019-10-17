const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = new express();

app.use(bodyParser.json());
