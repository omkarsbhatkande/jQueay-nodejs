const express = require("express");
const {connectMonoDb} = require("./connection")
const {logReqRes} = require("./middlewares/index")
const userRouter = require("./routes/user")

const app = express();
const PORT = 3000;

//connection
connectMonoDb("mongodb://localhost:27017/youtube-app-1")
.then(()=>console.log("mongoDb connected"));
//middleware : plugin
app.use(express.urlencoded({extended:false}))
app.use(logReqRes('log.txt'));
//Routes
app.use("/api/users",userRouter)
//listen Port
app.listen(PORT,(req,res)=>{
  console.log(`server in running at port ${PORT}`);
})



