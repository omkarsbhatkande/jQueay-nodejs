const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");
const { type } = require("os");


const app = express();
const PORT = 3000;

//connection

mongoose.connect("mongodb://localhost:27017/youtube-app-1")
.then(()=>{
  console.log("MongooseDB Connected");
})
.catch((err)=>{
  console.log("Error" ,err);
  
})

// schema
const userSchema = new mongoose.Schema({

  firstName:{
    type:String,
    required : true
  },
  lastName:{
    type:String,
    required : true
  },
  email:{
    type:String,
    required : true,
    unique:true
  },
  jobTitle:{
    type:String
  },
  gender:{
    type:String
  }

},{timestamps:true})

const User = mongoose.model("user" ,userSchema);




//middleware : plugin
app.use(express.urlencoded({extended:false}))

//Routes
app.get("/users",(req,res)=>{
  const html= `
   <ul>
   ${users.map(user=>`<li>${user.first_name}</li>`)}
   </ul>
   `;
   res.send(html);
 });

app.listen(PORT,(req,res)=>{
  console.log(`server in running at port ${PORT}`);
})

//REST API
app.get("/api/users",(req,res)=>{
  res.setHeader("x-name" ,"omkar B")
  return res.json(users);
})


// app.patch("/api/users/:id",(req,res)=>{
//   return  res.json({status:"pending"});
// });

// app.delete("/api/users/:id",(req,res)=>{
//   return  res.json({status:"pending"});
// });


app.route("/api/users/:id").get((req,res)=>{
  const id = Number(req.params.id);
  const user = users.find((user)=>user.id === id);
  return res.json(user);
}).patch((req,res)=>{
  const found = users.find((item)=>{return item.id === parseInt(req.params.id)});
  if(found){
    if(req.body.first_name){
      found.first_name=req.body.first_name
    }
    if(req.body.last_name){
      found.last_name=req.body.last_name
    }
    if(req.body.email){
      found.email=req.body.email
    }
    if(req.body.gender){
      found.gender=req.body.gender
    }
    if(req.body.job_title){
      found.job_title=req.body.job_title
    }
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{return  res.json({status:"success",});})
  }
  //console.log(body);
  
  return  res.json({status:"pending",users});
})
.delete((req,res)=>{
  return  res.json({status:"pending"});
})

app.post("/api/users/",async (req,res)=>{
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

 const result =  await User.create({
    firstName : body.first_name,
    lastName : body.last_name,
    email : body.email,
    gender: body.gender,
    jobTitle: body.job_title
  })

  return res.status(200).json({msg : "data successfully added"})


  // users.push({...body, id: users.length + 1});
  // fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{return  res.json({status:"success", id:users.length});})
  //console.log(body);
  
});



