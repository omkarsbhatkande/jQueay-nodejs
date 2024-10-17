
const path = require("path");
//External 
const express = require("express");

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/PathUtil")

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
  //res.status(404);
  res.sendFile(path.join(rootDir,"views","/404.html")) 
})

const PORT = 3000;
// listen port
app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})