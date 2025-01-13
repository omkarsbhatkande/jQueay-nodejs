// packages imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan")

//files
const connectDb = require("./config/db");
const testRoutes = require("./routes/testRoutes")


const PORT = process.env.PORT || 8080;

//dot env config
dotenv.config()

//mongoDB connection
connectDb();

// rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//routes
app.use("/api/v1/test", testRoutes)

//listen
app.listen(PORT,()=>{
console.log(`port is running in ${process.env.DEV_MODE} Mode at ${PORT}`);
})