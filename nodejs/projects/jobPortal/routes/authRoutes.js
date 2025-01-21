const { registerController } = require("../controllers/authController");

const express = require("express");

//router object
const router = express.Router();

//routes
router.post("/register", registerController);

//
module.exports = router;
