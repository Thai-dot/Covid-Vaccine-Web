const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const res = require("express/lib/response");
const req = require("express/lib/request");

const authCtrl = require("../controller/authCtrl");

router.route("/login").post((request, response) => {
  const loginInfo = {...request.body};

  authCtrl.loginUser(loginInfo).then((result) => {

    if (result[0].length === 0) {
      response.status(401).json({ message: "Invalid username or password" });
    } else {
    response.status(200).json(result[0]);
    }
  });
});

router.route("/logout").post((request, response) => {
  response.status(200).json({ message: "Logout success" });
});




module.exports = router;
