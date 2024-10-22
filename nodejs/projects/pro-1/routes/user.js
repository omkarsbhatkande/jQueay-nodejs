const express = require("express");
const {getAllUsers, getUserById, updateUserById ,deleteUserById, createNewUser} = require("../controllers/user")
const router = express.Router();


//Routes
// router.get("/users",(req,res)=>{
//   const html= `
//    <ul>
//    ${users.map(user=>`<li>${user.first_name}</li>`)}
//    </ul>
//    `;
//    res.send(html);
//  });



//REST API
router.route("/")
.get(getAllUsers)
.post(createNewUser)


router
.route("/:id")
.get(getUserById)
.patch(updateUserById)
.delete(deleteUserById)


module.exports = router;



// app.patch("/api/users/:id",(req,res)=>{
//   return  res.json({status:"pending"});
// });

// app.delete("/api/users/:id",(req,res)=>{
//   return  res.json({status:"pending"});
// });
