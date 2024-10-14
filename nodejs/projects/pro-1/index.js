const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 3000;

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
  return  res.json({status:"pending"});
})
.delete((req,res)=>{
  return  res.json({status:"pending"});
})

app.post("/api/users/",(req,res)=>{
  return  res.json({status:"pending"});
});



