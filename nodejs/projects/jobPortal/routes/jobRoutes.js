const express = require("express");
const userAuth = require("../middlewares/authMiddleware");
const { createJobController } = require("../controllers/jobsController");

const router = express.Router();

//routes
// Create job || POSt

router.post("/create-job", userAuth,createJobController);

module.exports = router;
