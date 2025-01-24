// packages imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const express_asyc_error = require("express-async-errors");

//files
const connectDb = require("./config/db");
//routes import
const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 8080;

//dot env config
dotenv.config();

//mongoDB connection
connectDb();

// rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);

//validation middlewares
app.use(errorMiddleware);

//listen
app.listen(PORT, () => {
  console.log(`port is running in ${process.env.DEV_MODE} Mode at ${PORT}`);
});
