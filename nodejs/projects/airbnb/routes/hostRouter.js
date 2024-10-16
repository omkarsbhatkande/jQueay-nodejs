const express = require("express");
const hostRouter = express.Router();


hostRouter.get("/host/add-home",(req,res,next)=>{
  res.send(`<h1>Regiter Your Home</h1>
    <form action = "/host/add-home" method ="post">
    <input type="text" name="houseName" placeholder="Enter Your House Name"/>
    <input type="submit" />
    </form>
    `)
    next();
});



hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);
  
  res.send(`<h1>Home registered SuccessFully</h1>
    <a href="/">Back to Home Page</a>
    `)
});



module.exports = hostRouter;