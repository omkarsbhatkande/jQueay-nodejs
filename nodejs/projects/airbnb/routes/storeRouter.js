//core module
//const path = require("path");

//External module
const express = require("express");
const storeRouter = express.Router();
//const rootDir = require("../utils/PathUtil");
// const { registeredHomes } = require("./hostRouter");
const homeController = require('../controllers/storeController')


storeRouter.get("/",homeController.getHomes);

storeRouter.get("/bookings",homeController.getBookings);

module.exports = storeRouter;