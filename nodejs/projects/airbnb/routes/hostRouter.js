const express = require("express");
const hostRouter = express.Router();

// local modules
const homeController = require('../controllers/homes')


// Route to serve the add-home page
hostRouter.get("/add-home", homeController.getAddHome);
hostRouter.post("/add-home",homeController.postAddHome);



// Export the router and registered homes
module.exports = {
  hostRouter
};