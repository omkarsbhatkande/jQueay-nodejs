const express = require("express");


const fs = require("fs");

const users = require("./MOCK_DATA.json");


const app = express();

const PORT = 3000;


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

app.post("/api/users/",(req,res)=>{
  const body = req.body;
  users.push({...body, id: users.length + 1});
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{return  res.json({status:"success", id:users.length});})
  //console.log(body);
  
  
});



