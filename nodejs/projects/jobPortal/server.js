//imports
const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const testRoutes = require("./routes/testRoutes")

const PORT = process.env.PORT || 8080;

//dot env config
dotenv.config()

//mongoDB connection
connectDb();

// rest object
const app = express();


//routes
app.use("/api/v1/test", testRoutes)

//listen
app.listen(PORT,()=>{
console.log(`port is running in ${process.env.DEV_MODE} Mode at ${PORT}`);
})