const express = require("express");
const hostRouter = express.Router();

// local modules
const hostController = require('../controllers/hostController')





// Route to serve the add-home page
hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home",hostController.postAddHome);
hostRouter.get("/host-home-list" , hostController.getHostHomes)




// Export the router and registered homes
module.exports = {
  hostRouter
};