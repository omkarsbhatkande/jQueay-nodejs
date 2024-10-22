const express = require("express");
const path = require("path");


const hostRouter = express.Router();

// local modules
const rootDir = require("../utils/PathUtil")


// Route to serve the add-home page
hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', {pageTitle:'Add-home'}); 
});
const registeredHomes = [];

hostRouter.post("/add-home",(req,res,next)=>{
  //console.log(req.body.houseName);
  registeredHomes.push({houseName:req.body.houseName});
  res.render('homeAdded',{pageTitle:'Home Added'}) 
});



// Export the router and registered homes
module.exports = {
  hostRouter,
  registeredHomes
};