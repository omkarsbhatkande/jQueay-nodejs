const {
  registerController,
  loginController,
} = require("../controllers/authController");

const express = require("express");

//router object
const router = express.Router();

//routes
//register || post
router.post("/register", registerController);
//login || post
router.post("/login", loginController);

//
module.exports = router;
