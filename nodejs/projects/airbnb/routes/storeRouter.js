//core module
//const path = require("path");

//External module
const express = require("express");
const storeRouter = express.Router();
//const rootDir = require("../utils/PathUtil");
// const { registeredHomes } = require("./hostRouter");
const homeController = require('../controllers/storeController')



storeRouter.get("/",homeController.getIndex);
storeRouter.get("/homes",homeController.getHomes);
storeRouter.get("/bookings",homeController.getBookings);
storeRouter.get("/favourites", homeController.getFavouriteList);
storeRouter.get("/homes/:homeId",homeController.getHomeDetails)


module.exports = storeRouter;