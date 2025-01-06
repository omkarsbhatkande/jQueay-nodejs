const express = require("express");
const { testPostController } = require("../controllers/testControllers");


//router object
const router = express.Router();


//routes
router.post('/test-post',testPostController)



//export
module.exports = router;