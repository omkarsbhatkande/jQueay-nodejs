const express = require("express");
const { testPostController } = require("../controllers/testControllers");
const userAuth = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
router.post("/test-post", userAuth, testPostController);

//export
module.exports = router;
