const express = require("express");
const userAuth = require("../middlewares/authMiddleware");
const {
  createJobController,
  getAllJobsController,
  updateJobController,
} = require("../controllers/jobsController");

const router = express.Router();

//routes
// Create job || POSt

router.post("/create-job", userAuth, createJobController);

//get || jobs
router.get("/get-job", userAuth, getAllJobsController);

//update jobs ||put || patch

router.patch("/update-job/:id", userAuth, updateJobController);

module.exports = router;
