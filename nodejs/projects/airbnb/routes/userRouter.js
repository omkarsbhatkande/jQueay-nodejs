//core module
//const path = require("path");

//External module
const express = require("express");
const userRouter = express.Router();
//const rootDir = require("../utils/PathUtil");
// const { registeredHomes } = require("./hostRouter");
const homeController = require('../controllers/homes')


userRouter.get("/",homeController.getHomes);

module.exports = userRouter;