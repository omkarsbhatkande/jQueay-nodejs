//External 
const express = require("express");

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter)

const PORT = 3000;
// listen port
app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})