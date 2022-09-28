const express = require("express");
const route = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userModel = require("../models/userModel");

route.get("/profile", (req, res) => {
  try {
    const auth_id = jwt.verify(
      req.headers.authorization,
      process.env.SECRET_KEY
    );

    userModel
      .findOne({ email: auth_id })
      .then((Data) => {
        res.status(200).send(Data);
      })
      .catch((err) => {
        res.status(200).send(err);
      });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

module.exports = route;
