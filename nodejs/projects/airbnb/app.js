
const path = require("path");
//External 
const express = require("express");

const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require("./utils/PathUtil")

const app = express();

// Ejs pakage
app.set('view engine' , 'ejs');
app.set('views' , 'views')

app.use(express.urlencoded({ extended: false }));
app.use(userRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir,"public")))

app.use((req,res,next)=>{
  //res.status(404);
  res.render('404',{pageTitle:'page not found',currentPage:'404'}) 
})

const PORT = 3000;
// listen port
app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})