const express  = require("express");

const app = express();

const PORT = 3000;


// listen port

app.listen(PORT,()=>{
  console.log(`server is running at port ${PORT}`);
})

//MiddlesWare
app.use("/",(req,res,next)=>{
  console.log(`this is a first middleWare`);
  next();  
})

app.use("/",(req,res,next)=>{
  console.log(`this is a second middleWare`);
  next();  
})

// app.use("/",(req,res,next)=>{
//   console.log(`this is a third middleWare`);
//   res.send("<h1>welcome to middle ware</h1>")
//   next();  
// })

//Rest API
app.get("/",(req,res,next)=>{
  res.send(`"<h1>this is get request</h1>"`);
  console.log(`this is get request`);
  // next();
})


app.get("/contact-us",(req,res,next)=>{
  console.log(`this is get request using url`);
  res.send(`
    <h1>Please give your details</h1>
    <form action="/contact-us" method="POST">
    <input type="text" placeholder="Enter your name" />
    <input type="email" placeholder="Enter your email" />
    <input type="submit" />
    </form>
    `);
  
   //next();
})

app.post("/contact-us",(req,res,next)=>{
  console.log(`this is post request hnadling data`);
  res.send(`<h1> thank u so much </h1>`)
})



