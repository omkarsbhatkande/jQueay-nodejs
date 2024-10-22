const User = require("../models/user")

async function getAllUsers(req,res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}


async function getUserById(req,res) {
  const user = await User.findById(req.params.id);
  if(!user) return res.status(404).json({error : "user not found"})
  return res.json(user);
}


async function updateUserById(req,res){
  await User.findByIdAndUpdate(req.params.id,{LastName : "Changed"});
  return res.json({Status : "Success"});
}

async function deleteUserById(req,res){
  await User.findByIdAndDelete(req.params.id);
  return  res.json({status:"pending"});
}


async function createNewUser(req,res){
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

  return res.status(201).json({msg : "data successfully added",id:result._id})
}


module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser
}