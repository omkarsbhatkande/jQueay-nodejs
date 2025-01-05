//imports
const express = require("express");
const dotenv = require("dotenv")

const PORT = process.env.PORT || 8080;

//dot env config
dotenv.config()

// rest object
const app = express();


//routes
app.get('/',(req,res)=>{
  res.send("<h1>Welcome to job My portal</h1>")
  console.log("hello world");
})

//listen
app.listen(PORT,()=>{
console.log(`port is running in ${process.env.DEV_MODE} Mode at ${PORT}`);
})